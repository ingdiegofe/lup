import { Component, OnInit } from '@angular/core';
import { AdminEmpresasService } from '../../../services/admin/admin-empresas/admin-empresas.service';
import { Router } from '@angular/router';
declare function DesplegarMensajeAdmin(strTipo, strMensaje): any;

@Component({
  selector: 'app-mantenimiento-empresas',
  templateUrl: './mantenimiento-empresas.component.html',
  styleUrls: ['./mantenimiento-empresas.component.css']
})
export class MantenimientoEmpresasComponent implements OnInit {

  empresas = [];

  constructor(private _adminEmpresasService:AdminEmpresasService, private router: Router) { }

  ngOnInit() {
    this.ObtenerEmpresas();
  }

  IrAFormularioAgregar(){
    this.router.navigate(['formE/agregar']);
  }

  ObtenerEmpresas()
  {
	  this._adminEmpresasService.getEmpresas()
	  .subscribe(data=>{
		if(data.code==1){
          this.empresas = data.data.body;
        }else{
          DesplegarMensajeAdmin("Error", data.message);
        }
	  });
  }

}
