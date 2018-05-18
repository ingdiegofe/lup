import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Globals } from '../../../globals'
import 'rxjs/Rx';

@Injectable()
export class AdminEmpresasService {

  url:string = this.globals.MantEmpresas;

  constructor(private http:Http, private globals:Globals) {  }
  
  getEmpresas() {
					 
	let headers = new Headers({ 'Content-Type':'application/x-www-form-urlencoded' });
	let body = "?estado=A";
	let getUrl = this.url + '/lista-empresas' + body;
	
	return this.http.get(getUrl, { headers:headers })
	.map( res =>{
	   console.log(res.json());
	   return res.json();
	 });
	 
  }
  

}
