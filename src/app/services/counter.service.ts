import {LoggingService} from './logging.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private activeToInactiveCounter: number = 0;
  private inactiveToActiveCounter: number = 0;

  public incrementActiveToInactive(): void {
    this.activeToInactiveCounter++;

    LoggingService.print('Active to Inactive Counter: ', this.activeToInactiveCounter);
  }

  public incrementInactiveToActive(): void {
    this.inactiveToActiveCounter++;

    LoggingService.print('Inactive to Active Counter: ', this.inactiveToActiveCounter);
  }
}
