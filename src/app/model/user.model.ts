export class User{
    constructor(
        private _token:string,
       public email?:string,
       private _expirationTime?:Date
       ){}
    
       get token(){
//         if(!this._expirationTime || this._expirationTime<new Date()){
// return null;
//         }
        return this._token;
       }
}