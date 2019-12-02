import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatSlideToggleModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const MATERIAL = [
  MatFormFieldModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatInputModule
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
