import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminEmpresasService } from '../../../services/admin/admin-empresas/admin-empresas.service';
declare function ValidarCampo(campo): any;
declare function Cargando(): any;
declare function Finalizado(): any;
declare function DesplegarMensajeAdmin(strTipo, strMensaje): any;

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.css']
})
export class FormularioEmpresaComponent implements OnInit {


  strTitulo: string;
  Empresa = {
    id_empresa: 0,
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    url: ""
  };


  constructor(private _adminEmpresasService: AdminEmpresasService, private route: ActivatedRoute) { }

  AgregarEmpresa() {
    let _strMensaje = "";
    // Validar campos obligatorios de empresa
    if (!ValidarCampo(this.Empresa.nombre)) {
      _strMensaje = "Se deben ingresar todos los campos obligatorios";
    }
    // Validar campos no obligatorios

    // Enviar a ingresar empresa si validaciones fueron aprobadas
    if(_strMensaje != ""){
	  DesplegarMensajeAdmin("Error", _strMensaje);
	}else{
	  Cargando();
      this._adminEmpresasService.AgregarEmpresa({ empresa: this.Empresa })
        .subscribe(data => {
		  Finalizado();
          if(data.code==1){
            DesplegarMensajeAdmin("Ok", data.message);
          }else{
            DesplegarMensajeAdmin("Error", data.message);
          }
      });
    }
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['operacion']);
    let strOperacion = this.route.snapshot.params['operacion']
    if (strOperacion == "agregar") {
      this.strTitulo = "Agregar nueva empresa";
    } else if (strOperacion == "modificar") {
      this.strTitulo = "Modificar empresa";
      // Obtener información de empresa
    }
  }

  ngOnDestroy() {
  }

}
