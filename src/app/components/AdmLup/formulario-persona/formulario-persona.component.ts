import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminPersonasService } from '../../../services/admin/admin-personas/admin-personas.service';
declare function ValidarCampo(campo): any;
declare function Cargando(): any;
declare function Finalizado(): any;
declare function DesplegarMensajeAdmin(strTipo, strMensaje): any;

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  Operacion: string;
  Titulo: string;
  Persona = { nombres: "", apellidos: "", email: "", fecha_nacimiento: "", celular: "", dpi: "", direccion: "", genero: 1 };

  constructor(private _adminPersonasService: AdminPersonasService, private route: ActivatedRoute) { }

  AgregarPersona() {
    let _strMensaje = "";
    // Validar campos obligatorios de empresa
    if ( !ValidarCampo(this.Persona.nombres)  || !ValidarCampo(this.Persona.apellidos) || !ValidarCampo(this.Persona.email)
      || !ValidarCampo(this.Persona.fecha_nacimiento) ) {
      _strMensaje = "Se deben ingresar todos los campos obligatorios";
    }

    if (_strMensaje != "") {
      DesplegarMensajeAdmin("Error", _strMensaje);
    } else {
      Cargando();
      this._adminPersonasService.AgregarPersona({ persona: this.Persona })
        .subscribe(data => {
          Finalizado();
          if (data.code == 1) {
            DesplegarMensajeAdmin("Ok", data.message);
          } else {
            DesplegarMensajeAdmin("Error", data.message);
          }
        });
    }
  }

  ngOnInit() {
    let strOperacion = this.route.snapshot.params['operacion'];
    this.Operacion = strOperacion;
    if (strOperacion == "agregar") {
      this.Titulo = "Agregar nueva persona";
    }
  }

}
