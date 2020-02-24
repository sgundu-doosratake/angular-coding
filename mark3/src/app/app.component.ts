import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> Project MARK 2</h1>

  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">

  <p>NEw line</p>
  <button [disabled]="buttonStatus">My Button</button>
  <p></p>
  <button [disabled]="buttonstat == 'enabled'">Different Button</button>
  
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';

  buttonStatus = false;

  buttonstat = 'disabled';
}
