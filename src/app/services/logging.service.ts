export class LoggingService {
  public static print(message: string, status: any): void {
    console.log(message + status);
  }
}
