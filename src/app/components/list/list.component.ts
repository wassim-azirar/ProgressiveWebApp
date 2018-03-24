import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Coffee } from '../../logic/coffee';
import { Router } from '@angular/router';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public coffeeList: Array<Coffee>;

  constructor(
    private dataService: DataService,
    private router: Router,
    private geolocation: GeolocationService
  ) {}

  ngOnInit() {
    this.dataService.getList(list => {
      this.coffeeList = list;
    });
  }

  openDetails(coffee: Coffee) {
    this.router.navigate(['/coffee', coffee._id]);
  }

  goMap(coffee: Coffee) {
    const mapUrl = this.geolocation.getMapLink(coffee.location);
    location.href = mapUrl;
  }

  share(coffee: Coffee) {
    const shareText = `I had this coffee at ${coffee.place} and for me its a ${
      coffee.rating
    } star coffee`;

    if ('share' in navigator) {
      (navigator as any)
        .share({
          title: coffee.name,
          text: shareText,
          url: window.location.href
        })
        .then(() => {
          console.log('shared');
        })
        .catch(error => console.log('Error sharing', error));
    } else {
      const shareUrl = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareUrl;
    }
  }
}
