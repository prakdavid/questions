import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryQuestionsComponent } from './components/category-questions/category-questions.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesService } from './services/categories.service';
import { CategoriesResolver } from './components/categories/categories.resolver';
import { CategoryQuestionResolver } from './components/category-questions/category-question.resolver';
import { QuestionNewDialogComponent } from './components/category-questions/question-new-dialog/question-new-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryQuestionsComponent,
    QuestionAnswerComponent,
    HeaderComponent,
    QuestionNewDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    CategoriesService,
    CategoriesResolver,
    CategoryQuestionResolver
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    QuestionNewDialogComponent
  ]
})
export class AppModule { }
