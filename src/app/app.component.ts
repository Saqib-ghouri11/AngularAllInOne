import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-project';
  textFromClass='this is from class';
  isInvalid=false;
  canSave=false;

  userObject={username:'saqib',password:'1234',confirmPassword:'1234',interested:'angular',subscribe:true}

  constructor(){
    this.fromChild='';
  }
  fromChild:string;

  interests=['angular','react','vue']

  oneWayBinding="one way property binding"


  currentStyles:Record<string,string>={}

  //adding and removing styles using ngStyle directive.
  setCurrentStyles(){
    this.currentStyles={
      'font-style':this.canSave?'italic' : 'normal'
    }
  }

  twoWayBinding="two way binding"

  clickMe(){
    alert('clicked');
  }

  addItemFromChild(value:any){
    console.log('from child: '+value);
    this.fromChild=value;
  }

  toggle(){
    this.isInvalid=!this.isInvalid;
    this.canSave=!this.canSave;
  }

  ngOnInit():void{
    this.setCurrentStyles();
  }
}
