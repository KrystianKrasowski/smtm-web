import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [ './categories.component.scss' ]
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoriesService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoryService
      .fetchAllCategories()
      .subscribe(cats => this.categories = cats);
  }
}
