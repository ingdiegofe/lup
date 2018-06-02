import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUsuariosService } from '../../../services/admin/admin-usuarios/admin-usuarios.service';
declare function ValidarCampo(campo): any;
declare function Cargando(): any;
declare function Finalizado(): any;
declare function DesplegarMensajeAdmin(strTipo, strMensaje): any;

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  Operacion: string;
  Titulo: string;
  Usuario = { id_usuario:0, nombre: "", fecha_creacion: "", fecha_ingreso: "" };
  roles = [];

  constructor(private _adminUsuariosService: AdminUsuariosService, private route: ActivatedRoute) { }

  ListaRoles() {
    this._adminUsuariosService.ListaRoles()
      .subscribe(data => {
        if (data.code == 1) {
          console.log(data.data.body);
          this.roles = data.data.body;
        } else {
          DesplegarMensajeAdmin("Error", data.message);
        }
      });
  }

  ngOnInit() {
    let strOperacion = this.route.snapshot.params['operacion'];
    this.Operacion = strOperacion;
    if (strOperacion == "agregar") {
      this.Titulo = "Agregar nuevo usuario";
    } else if (strOperacion == "informacion") {
      this.Titulo = "Información usuario";
    } else if (strOperacion == "modificar") {
      this.Titulo = "Modificar usuario";
    }
    this.ListaRoles();
  }

}
