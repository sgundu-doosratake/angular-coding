import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> Hello. This is not a templateURL!</h1>
  <p> {{myObject.location}}</p>

  <ul>
    <li *ngFor="let arr of myArr">{{ arr }}</li>
  </ul>

  <p *ngIf="myArr">Yeah, Array exists</p>


  <p *ngIf="myArr2 == 'something'">Yeah, Array2 is something</p>


  <div *ngIf="myArr1; then tmpl1 else tmpl2"></div>

  <ng-template #tmpl1>Template 1</ng-template>
  <ng-template #tmpl2>Template 2</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject =  {
    gender : 'male',
    age : 24,
    location : 'USA'
  };

  myArr = ['jim','pam','scott'];

  myArr1 = false;

  myArr2 = 'something';

}
