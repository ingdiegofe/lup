import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUsuariosService } from '../../../services/admin/admin-usuarios/admin-usuarios.service';
import { AdminPersonasService } from '../../../services/admin/admin-personas/admin-personas.service';
import { AdminEmpresasService } from '../../../services/admin/admin-empresas/admin-empresas.service';

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
  Empresas = [];
  Personas = [];

  constructor(private _adminUsuariosService: AdminUsuariosService,
              private _adminPersonasService: AdminPersonasService,
              private _adminEmpresasService: AdminEmpresasService,
              private route: ActivatedRoute) { }

  ObtenerPersonas()
  {
    this._adminPersonasService.getPersonas()
    .subscribe(data=>{
    if(data.code==1){
          this.Personas = data.data.body;
        }else{
          DesplegarMensajeAdmin("Error", data.message);
        }
    });
  }

  ObtenerEmpresas()
  {
    this._adminEmpresasService.getEmpresas()
    .subscribe(data=>{
    if(data.code==1){
          this.Empresas = data.data.body;
        }else{
          DesplegarMensajeAdmin("Error", data.message);
        }
    });
  }

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
        this.ObtenerPersonas();
        this.ObtenerEmpresas();
    } else if (strOperacion == "informacion") {
      this.Titulo = "Información usuario";
      this.InfoUsuario();
    } else if (strOperacion == "modificar") {
      this.Titulo = "Modificar usuario";
    }

  }

}
