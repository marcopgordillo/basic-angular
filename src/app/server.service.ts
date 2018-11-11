import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ServerModel} from './server.model';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {

  private backEndUrl = 'https://udemy-ng-http-b7747.firebaseio.com/';

  constructor(private http: HttpClient) {}

  storeServers(servers: ServerModel[]): Observable<any> {

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    return this.http.put(this.backEndUrl + 'data.json', servers, {headers: headers});
  }

  getServers() {
    return this.http.get(this.backEndUrl + 'data.json');
  }
}
