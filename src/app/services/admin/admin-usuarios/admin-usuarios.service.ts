import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Globals } from '../../../globals'
import 'rxjs/Rx';

@Injectable()
export class AdminUsuariosService {

 url: string = this.globals.MantUsuarios;

  constructor(private http: Http, private globals: Globals) { }

  ListaRoles(){
    let token = localStorage.getItem('token');
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': token });
    let getUrl = this.url + '/lista-roles';

    return this.http.get(getUrl, { headers: headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  getUsuarios() {
    let token = localStorage.getItem('token');
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': token });
    let body = "?estado=A";
    let getUrl = this.url + '/lista-usuarios' + body;

    return this.http.get(getUrl, { headers: headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });

  }
}
