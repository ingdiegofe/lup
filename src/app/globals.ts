import { Injectable } from '@angular/core';

@Injectable()
export class Globals{
  url:string;
  Login:string;
  Usuario: string;


  constructor(){
    this.url = "http://localhost:3010";
    this.Login = this.url + "/login";
    this.Usuario = this.url + "/ad/usuario";

  }
}
