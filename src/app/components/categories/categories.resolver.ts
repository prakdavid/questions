import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { Resolve } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolver implements Resolve {

  constructor(private categoriesService: CategoriesService) { }

    resolve(): Observable<Category[]> {
        return this.categoriesService.getCategories();
    }
}
