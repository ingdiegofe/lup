import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {

strNombre:string = "";
strEmail:string = "";
strTelefono:string = "";
strAsunto:string ="";
strMensaje:string = "";
objConsulta:any;
lngMensaje:number = 2;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }
    EnvioCorreo(){}

}
