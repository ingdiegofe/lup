import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  strUsuario:string;
  strClave: string;
  objConsulta:any;
  lngIngreso: number = 0;
  strMensaje: string = "";


  constructor() { }

  ngOnInit() {
  }

}
