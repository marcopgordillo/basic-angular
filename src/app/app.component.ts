import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private loadedFeature: string = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBNdPEX88ROP1FoM7AMCG0jouiRlOKO_CM",
      authDomain: "udemy-ng-http-b7747.firebaseapp.com"
    });
  }

  public onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
