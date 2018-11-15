import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.select('auth').pipe(
      take(1),
      map(
        (authState: fromAuth.State) => {
          if (authState.authenticated) {
            return true;
          }

          authState.url = state.url;
          this.router.navigate(['/signin']);
          return false;
        }
      )
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.select('auth').pipe(
      take(1),
      map(
        (authState: fromAuth.State) => {
          if (authState.authenticated) {
            return true;
          }

          authState.url = route.path;
          this.router.navigate(['/signin']);
          return false;
        }
      )
    );
  }
}
