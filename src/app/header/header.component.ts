import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private isCollapsedMain = true;
  private isCollapsedSub = true;

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (data) => console.log(data),
      (error) => console.error(error));

    this.isCollapsedMain = true;
    this.isCollapsedSub = true;
  }

  onFetchData() {
    this.dataStorageService.getRecipes();

    this.isCollapsedMain = true;
    this.isCollapsedSub = true;
  }
}
