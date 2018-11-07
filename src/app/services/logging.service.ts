import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  public static print(message: string, status: any): void {
    console.log(message + status);
  }
}
