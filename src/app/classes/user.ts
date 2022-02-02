export class User {
    constructor(
       public username:string,
        public password:string,
       public confirmPassword:string,
       public interested:string,
       public timePreference:string,
       public  subscribe:boolean
    ){}
}
