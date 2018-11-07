export class LoggingService {
  constructor() { }

  public logStatusChanged(status: string): void {
    console.log('A server status changed, new status: ' + status);
  }
}
