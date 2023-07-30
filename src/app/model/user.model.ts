export class User{
    constructor(
        private _token:string,
       public email?:string,
       private _expirationTime?:Date
       ){}
    //    User(){}
    
       get token(){
        
        return this._token;
       }
}