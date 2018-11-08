import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ServerModel} from './server.model';
import {ServersService} from '../servers.service';

@Injectable()
export class ServerResolverService implements Resolve<ServerModel> {

  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerModel> | Promise<ServerModel> | ServerModel {
    return this.serversService.getServer(+route.params['id']);
  }

}
