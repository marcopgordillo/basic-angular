import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';

import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic-angular';
  content = null;

  constructor(private injector: Injector,
              private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    const AlertElement = createCustomElement(AlertComponent, {injector: this.injector});
    customElements.define('my-alert', AlertElement);

    setTimeout(() => {
      // this.content = "<p>A paragraph!</p>";
      //this.alertService.showAsComponent('This is a normal message!');
      this.content = this.domSanitizer.bypassSecurityTrustHtml('<my-alert message="This is a normal Angular component."></my-alert>');
    }, 1000);
  }

}
