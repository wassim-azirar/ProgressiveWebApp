import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Coffee } from '../../logic/coffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public coffeeList: Array<Coffee>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getList(list => {
      this.coffeeList = list;
    });
  }
}
