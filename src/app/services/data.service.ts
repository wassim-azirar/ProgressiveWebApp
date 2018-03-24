import { Injectable } from '@angular/core';
import { Coffee } from '../logic/coffee';
import { PlaceLocation } from '../logic/placeLocation';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private endpoint = 'http://pwa-api-server.azurewebsites.net';

  constructor(private httpClient: HttpClient) {}

  getList(callback) {
    this.httpClient.get(this.endpoint + '/coffees').subscribe(response => {
      callback(response);
    });
  }

  get(coffeeId: string, callback) {
    this.httpClient
      .get(this.endpoint + '/coffees/' + coffeeId)
      .subscribe(response => {
        callback(response);
      });
  }

  save(coffee, callback) {
    if (coffee._id) {
      // it's an update
      this.httpClient
        .put(this.endpoint + '/coffees/' + coffee._id, coffee)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.httpClient
        .post(this.endpoint + '/coffees/', coffee)
        .subscribe(response => {
          callback(true);
        });
    }
  }
}
