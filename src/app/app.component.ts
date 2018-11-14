import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from "../environments/environment";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private loadedFeature: string = 'recipe';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp(environment.firebase);
    // this.authService.loadUser();
  }

  public onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
