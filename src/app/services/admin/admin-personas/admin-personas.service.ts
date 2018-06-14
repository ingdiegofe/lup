import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Globals } from '../../../globals'
import 'rxjs/Rx';

@Injectable()
export class AdminPersonasService {

   url: string = this.globals.MantPersonas;

  constructor(private http: Http, private globals: Globals) { }

  getPersonas() {
    let token = localStorage.getItem('token');
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': token });
    let body = "?estado=A";
    let getUrl = this.url + '/lista-personas' + body;

    return this.http.get(getUrl, { headers: headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });

  }

  AgregarPersona(persona){
    let token = localStorage.getItem('token');
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
    let postUrl = this.url + '/agregar-persona';

    return this.http.post(postUrl, persona, { headers: headers })
    .map(res => {
      console.log(res.json());
      return res.json();
    });
  }

}
