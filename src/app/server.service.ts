import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerModel} from './server.model';
import {Observable} from 'rxjs';

@Injectable()
export class ServerService {

  private backEndUrl: string = 'https://udemy-ng-http-b7747.firebaseio.com/';

  constructor(private http: HttpClient) {}

  storeServers(servers: ServerModel[]): Observable<any> {

    return this.http.post(this.backEndUrl + 'data.json', servers);
  }
}
