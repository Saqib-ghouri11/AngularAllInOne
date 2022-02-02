import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdfRoutingModule } from './tdf-routing.module';
import { TdfComponent } from './tdf.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TdfComponent
  ],
  imports: [
    CommonModule,
    TdfRoutingModule,
    FormsModule,
  ],
  bootstrap: [TdfComponent]
})
export class TdfModule { 


}
