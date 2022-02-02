import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdfComponent } from './mdf.component';

const routes: Routes = [{ path: '', component: MdfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdfRoutingModule { }
