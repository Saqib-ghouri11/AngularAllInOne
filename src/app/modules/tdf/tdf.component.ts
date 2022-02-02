import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  isSelectValidity=false;
  userData=new User('saqib','1234','1234','angular','morning',true);
  constructor() {
 
   }

   interests=['angular','react','vue']

   inSelectValid(value:any){
    if(value=='default'){
      this.isSelectValidity=true
    }
    else{
      this.isSelectValidity=false;
    }
   }

  ngOnInit(): void {
   
  }

}
