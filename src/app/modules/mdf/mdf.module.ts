import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdfRoutingModule } from './mdf-routing.module';
import { MdfComponent } from './mdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MdfComponent
  ],
  imports: [
    CommonModule,
    MdfRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MdfModule { }
