import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourComponent } from './components/four/four.component';
import { HomeComponent } from './components/home/home.component';
import { OneComponent } from './components/one/one.component';
import { TDFComponent } from './components/tdf/tdf.component';
import { ThreeComponent } from './components/three/three.component';
import { TwoComponent } from './components/two/two.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';
import { AccessGuard } from './guard/access.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'tdf',component:TDFComponent},
  {canActivate:[AccessGuard], path:'one',component:OneComponent},
  {path:'two',component:TwoComponent},
  {path:'three',component:ThreeComponent},
  {path:'four',component:FourComponent},
   //customer module path for lazy loading
   { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) },
 
   //wild card compponent
   {path:'**',component:WildCardComponent},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
