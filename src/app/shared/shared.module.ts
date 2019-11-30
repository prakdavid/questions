import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

const SHARED = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  RouterModule
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
