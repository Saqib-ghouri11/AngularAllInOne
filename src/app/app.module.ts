import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { FourComponent } from './components/four/four.component';
import { WildCardComponent } from './components/wild-card/wild-card.component';
import { HomeComponent } from './components/home/home.component';
import { TdfModule } from './modules/tdf/tdf.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    WildCardComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TdfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
