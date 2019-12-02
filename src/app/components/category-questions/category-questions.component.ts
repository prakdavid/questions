import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QuestionNewDialogComponent } from './question-new-dialog/question-new-dialog.component';

@Component({
  selector: 'app-category-questions',
  templateUrl: './category-questions.component.html',
  styleUrls: ['./category-questions.component.css']
})
export class CategoryQuestionsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewQuestionModal(slug: string = 'angular'): void {
    const dialogRef = this.dialog.open(QuestionNewDialogComponent, {
      data: {slug: slug}  
    });
  }
}
