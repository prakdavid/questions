import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Form, FormGroup, Validators } from '@angular/forms';
import { CategoryQuestionService } from 'src/app/services/category-question.service';

@Component({
  selector: 'app-question-new-dialog',
  templateUrl: './question-new-dialog.component.html',
  styleUrls: ['./question-new-dialog.component.css']
})
export class QuestionNewDialogComponent implements OnInit {
  public slug: string;
  public form: FormGroup;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<QuestionNewDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public questionService: CategoryQuestionService
    ) {
      this.slug = data.slug;
    }

  ngOnInit() {
    this.form = this.fb.group({
      question: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  close() {
    this.dialogRef.close();
  }

  save(value: any) {
    if (value.question) {
      // create the question using service
      // this.questionService
    }
    this.dialogRef.close();
  }


}
