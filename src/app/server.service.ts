import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ServerModel} from './server.model';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';

@Injectable()
export class ServerService {

  private backEndUrl = 'https://udemy-ng-http-b7747.firebaseio.com/';

  constructor(private http: HttpClient) {}

  storeServers(servers: ServerModel[]): Observable<any> {

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    return this.http.put(this.backEndUrl + 'data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get(this.backEndUrl + 'data')
      .pipe(
        map((response: any[]) => {
          for (const server of response) {
            server.name = 'FETCHED_' + server.name;
          }
          return response;
      }),
        catchError((error: Response) => {
          // return throwError(error);
          return throwError('Something went wrong!');
        }));
  }
}
