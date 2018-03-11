import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {
  private routingSubscription: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}
