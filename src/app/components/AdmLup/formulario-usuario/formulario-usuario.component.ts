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
  Usuario = { id_usuario:0, nombre: "", fecha_creacion: "", fecha_ingreso: "", logueado:"", estado:"", id_rol:0  };
  roles = [];

  constructor(private _adminUsuariosService: AdminUsuariosService, private route: ActivatedRoute) { }

  ListaRoles() {
    this._adminUsuariosService.ListaRoles()
      .subscribe(data => {
        if (data.code == 1) {
          console.log(data.data.body);
          this.roles = data.data.body;
          console.log("Id rol es de tipo => " + typeof this.roles[0].id_rol);
        } else {
          DesplegarMensajeAdmin("Error", data.message);
        }
      });
  }

  InfoUsuario() {
    let idUsuario = this.route.snapshot.params['idusuario'];
    this._adminUsuariosService.InfoUsuario({ idusuario: idUsuario })
      .subscribe(data => {
        Finalizado();
        if (data.code == 1) {
          console.log(data.body.usuario[0]);
          this.Usuario = data.body.usuario[0];
          console.log(typeof this.Usuario.id_rol);
          this.ListaRoles();
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
        this.ListaRoles();
    } else if (strOperacion == "informacion") {
      this.Titulo = "Información usuario";
      this.InfoUsuario();
    } else if (strOperacion == "modificar") {
      this.Titulo = "Modificar usuario";
    }

  }

}
