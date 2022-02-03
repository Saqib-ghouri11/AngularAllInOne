import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';
import { User } from 'src/app/classes/user';
import { PasswordMismatchValidation } from 'src/app/custom/validations/password-mismatch-validation';
import { UserValidation } from 'src/app/custom/validations/user-validation';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {
  constructor(private httpService:HttpService, private fb:FormBuilder) { 
    
  }
  reactiveFormModule=this.fb.group({
    username:['',[Validators.required,UserValidation(/admin/)]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmPassword:['',[Validators.required,Validators.minLength(8)]],
    interested:['default'],
    timePreferences:['morning'],
    subscribe:[true],
    
  },{validator:PasswordMismatchValidation});

  onSubmit(){
    this.httpService.sendDataToServer("http://localhost:8000/post-here",this.reactiveFormModule.value).subscribe(
     
      resp=>
      
      alert('success'+JSON.stringify(resp)),
      error=>alert(error.statusText)
      );
  }

  user=new User('saqib','1234','1234','angular','evening',true);

  get getFormUsername(){
    return this.reactiveFormModule.get('username');
  }
 get getFormPassword(){
    return this.reactiveFormModule.get('password');
  }
  get getConfirmPassword(){
    return this.reactiveFormModule.get('confirmPassword');
  }
  get getInterest(){
    return this.reactiveFormModule.get('interested');
  }
  get getTimePreferences(){
    return this.reactiveFormModule.get('timePreferences');
  }
  get getSubscribe(){
    return this.reactiveFormModule.get('subscribe');
  }

  
  interests=['angular','react','vue']
  selectValidity=false;
  isSelectValid(value:any){
    if(value=='default'){
     this.selectValidity=true;
    }
    else{
      this.selectValidity=false;
    }
  }

  loadData(){
    this.reactiveFormModule.setValue({
      username:this.user.username,
      password:this.user.password,
      confirmPassword:this.user.confirmPassword,
      interested:this.user.interested,
      timePreferences:this.user.timePreference,
      subscribe:this.user.subscribe
    });
  }
  ngOnInit(): void {
    this.loadData();
  }

}
