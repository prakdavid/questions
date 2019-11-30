import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryQuestionsComponent } from './components/category-questions/category-questions.component';
import { CategoriesResolver } from './components/categories/categories.resolver';


const routes: Routes = [
  { path: '', component: CategoriesComponent, resolve: { data: CategoriesResolver } },
  { path: 'questions/:slug', component: CategoryQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
