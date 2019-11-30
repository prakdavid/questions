import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatSlideToggleModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatChipsModule
} from '@angular/material';

const MATERIAL = [
  MatSlideToggleModule,
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatChipsModule
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
