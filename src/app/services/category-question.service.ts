import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryQuestionService {
  // public questions:

  constructor(private http: HttpClient) { }

  getQuestionBySlug() {

  }

  createQuestion() {
    
  }




}
