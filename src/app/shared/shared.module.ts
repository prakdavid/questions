import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const SHARED = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  RouterModule,
  HttpClientModule
];

@NgModule({
  declarations: [],
  imports: [
    SHARED
  ],
  exports: [
    SHARED
  ]
})
export class SharedModule { }
