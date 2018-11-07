export class LoggingService {
  constructor() { }

  public static logStatusChanged(status: string): void {
    console.log('A server status changed, new status: ' + status);
  }
}
