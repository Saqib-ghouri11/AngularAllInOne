import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  reactiveFormModule=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    interested:new FormControl('default'),
    timePreferences:new FormControl('morning'),
    subscribe:new FormControl(false),
    
  });

  constructor() { 
    
  }
  interests=['angular','react','vue']



  ngOnInit(): void {
    this.reactiveFormModule=new FormGroup({
      username:new FormControl(''),
      password:new FormControl(''),
      confirmPassword:new FormControl(''),
       interested:new FormControl('default'),
      // timePreferences:new FormControl('morning'),
     // subscribe:new FormControl(false),
      
    });
  }

}
