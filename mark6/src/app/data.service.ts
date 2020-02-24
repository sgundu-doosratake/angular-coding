import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  cars = [
    'Ford','MAzda','Honda','Acura'
  ];

  myData() {

    return 'This is myData!!';
  }
}
