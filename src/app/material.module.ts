import { NgModule } from '@angular/core';
import { MatButtonModule,  MatSlideToggleModule, MatCheckboxModule } from '@angular/material';

const MATERIAL = [
  MatSlideToggleModule,
  MatCheckboxModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    MATERIAL
  ],
  exports: [
    MATERIAL
  ]
})
export class MaterialModule { }
