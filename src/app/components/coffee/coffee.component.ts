import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coffee } from '../../logic/coffee';
import { GeolocationService } from '../../services/geolocation.service';
import { TastingRating } from '../../logic/tastingRating';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {
  private routingSubscription: any;
  public coffee: Coffee;
  public types: Array<string> = [
    'Espresso',
    'Ristretto',
    'Americano',
    'Cappuccino',
    'Frappuccino'
  ];

  constructor(
    private route: ActivatedRoute,
    private geolocation: GeolocationService
  ) {}

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);
    });

    this.geolocation.requestLocation(location => {
      if (location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    });
  }

  public tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.coffee.tastingRating = new TastingRating();
    } else {
      this.coffee.tastingRating = null;
    }
  }

  cancel() {
    console.log('cancel');
  }

  save() {
    console.log('save');
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}
