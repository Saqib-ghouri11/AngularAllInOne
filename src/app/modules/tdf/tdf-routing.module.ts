import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfComponent } from './tdf.component';

const routes: Routes = [{ path: '', component: TdfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdfRoutingModule { }
