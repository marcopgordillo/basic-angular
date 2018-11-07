export class LoggingService {
  public static changeStatus(status: string): void {
    console.log('Status is now: ' + status);
  }
}
