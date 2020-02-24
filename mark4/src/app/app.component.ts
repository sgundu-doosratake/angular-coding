import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <button (click)="myEvent($event)">Click for event</button>


    <p></p>
    <button (mouseenter)="myEvent1($event)">Mouse Down button</button>


    <p></p>
    <button (mousemove)="myEvent2($event)">Mouse Move button</button>

  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  myEvent(event) {
    console.log(event);
  }

  myEvent1(event){
    console.log(event);
  }

  myEvent2(event){
    console.log(event);
  }
}
