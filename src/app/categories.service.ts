import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { CATEGORIES } from './mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() {
  }

  fetchAllCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
}
