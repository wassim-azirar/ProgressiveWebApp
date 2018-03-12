import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from '../../logic/coffee';
import { GeolocationService } from '../../services/geolocation.service';
import { TastingRating } from '../../logic/tastingRating';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {
  private routingSubscription: any;
  public coffee: Coffee;
  public tastingEnabled = false;
  public types: Array<string> = [
    'Espresso',
    'Ristretto',
    'Americano',
    'Cappuccino',
    'Frappuccino'
  ];

  constructor(
    private route: ActivatedRoute,
    private geolocation: GeolocationService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(params => {
      const coffeeId = params['id'];
      if (coffeeId) {
        this.dataService.get(coffeeId, response => {
          this.coffee = response;
          if (this.coffee.tastingRating) {
            this.tastingEnabled = true;
          }
        });
      }
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
    this.router.navigate(['/']);
  }

  save() {
    this.dataService.save(this.coffee, result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}
