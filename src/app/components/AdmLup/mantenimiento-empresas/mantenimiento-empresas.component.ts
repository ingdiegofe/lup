import { Component, OnInit } from '@angular/core';
import { AdminEmpresasService } from '../../../services/admin/admin-empresas/admin-empresas.service';

@Component({
  selector: 'app-mantenimiento-empresas',
  templateUrl: './mantenimiento-empresas.component.html',
  styleUrls: ['./mantenimiento-empresas.component.css']
})
export class MantenimientoEmpresasComponent implements OnInit {

  /*
  empresas = [
	{ nombre: "Cemaco S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "marodriguez" },
	{ nombre: "Malher S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "marodriguez"  },
	{ nombre: "Farmacias Meykos S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "admin1"   },
	{ nombre: "Guadalupana S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "admin1"   },
	{ nombre: "Pollo Campero S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "marodriguez"  },
	{ nombre: "Paiz S.A.", fecha_modificacion: "2018-05-18 15:30:00", usuario_modifica: "marodriguez"   }
  ];
  */
  empresas = [];

  constructor(private _adminEmpresasService:AdminEmpresasService) { }

  ngOnInit() {
  }
  
  ObtenerEmpresas()
  {
	  this._adminEmpresasService.getEmpresas()
	  .subscribe(data=>{
		console.log("Servicio mantenimiento empresas => " + data);
		this.empresas = data.empresas;
	  });
  }

}
