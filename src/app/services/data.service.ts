import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() {}

  getList(callback) {
    const list = [
      new Coffee(
        'Double Espresso',
        'Sunny Cafe',
        new PlaceLocation('123 Market St', 'San Francisco')
      ),
      new Coffee(
        'Caramel Americano',
        'Starcoffee',
        new PlaceLocation('Gran Via 34', 'Madrid')
      )
    ];
    callback(list);
  }

  save(coffee: Coffee, callback) {
    callback(true);
  }
}
