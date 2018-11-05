import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private current: string = 'recipe';

  @Output()
  private featureSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onSelect(feature: string): void {
    this.featureSelected.emit(feature);
    this.current = feature;
  }

}
