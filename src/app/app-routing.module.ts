import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryQuestionsComponent } from './components/category-questions/category-questions.component';


const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'questions/:category', component: CategoryQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
