import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 [ngClass]="titleClasses"> Internal Styles using styles component!!</h1>

  <h2 [style.color]="titleStyle ? 'green' : 'pink'">Style Binding</h2>
  <h3 [ngStyle]="titleStyles">Style Binding</h3>
  `,
  styles: [`
      h1 {
        text-decoration:underline;
        font-style:bold;
      }  

      .blue-title {
        color:blue;
      }

      .large-title{
        font-size:2em;
      }
  `]
})
export class AppComponent {
  
  titleClass = false;

  titleClasses = {
      'blue-title': true,
      'large-title': true

  }

  titleStyle = true;

  titleStyles = {
    'color': 'yellow',
    'font-size': '4em'

}
}
