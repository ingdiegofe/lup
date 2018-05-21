import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminEmpresasService } from '../../../services/admin/admin-empresas/admin-empresas.service';
declare function ValidarCampo(campo): any;

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.css']
})
export class FormularioEmpresaComponent implements OnInit {


  titulo: string;
  empresa = {
    id_empresa: 0,
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    url: ""
  };


  constructor(private _adminEmpresasService: AdminEmpresasService, private route: ActivatedRoute) { }

  AgregarEmpresa() {
    let mensaje = "";
    // Validar campos obligatorios de empresa
    if (!ValidarCampo(this.empresa.nombre)) {
      mensaje = "Se deben ingresar todos los campos obligatorios";
    }

    // Validar campos no obligatorios

    // Enviar a ingresar empresa si validaciones fueron aprobadas
    if(mensaje==""){
      this._adminEmpresasService.AgregarEmpresa({ empresa: this.empresa })
        .subscribe(data => {
          if(data.code==1){
            // Mensaje de exito
            console.log("Empresa agregada exitosamente");
          }else{
            // Mensaje de error
          }
      });
    }else{
      // Mensaje de error
    }
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['operacion']);
    let operacion = this.route.snapshot.params['operacion']
    if (operacion == "agregar") {
      this.titulo = "Agregar nueva empresa";
    } else if (operacion == "modificar") {
      this.titulo = "Modificar empresa";
      // Obtener información de empresa
    }
  }

  ngOnDestroy() {
  }

}
