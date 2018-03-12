import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Coffee } from '../../logic/coffee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public coffeeList: Array<Coffee>;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getList(list => {
      this.coffeeList = list;
    });
  }

  openDetails(coffee: Coffee) {
    this.router.navigate(['/coffee', coffee._id]);
  }
}
