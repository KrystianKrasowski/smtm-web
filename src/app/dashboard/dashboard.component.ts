import { Component, OnInit } from '@angular/core';
import { CategoryProgress } from './category-progress';
import { CATEGORY_PROGRESSES } from './mock-category-progresses';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  categoryProgresses: CategoryProgress[] = CATEGORY_PROGRESSES;

  constructor() { }

  ngOnInit() {
  }

}
