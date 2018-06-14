import { Component, OnInit } from '@angular/core';
import { AdminPersonasService } from '../../../services/admin/admin-personas/admin-personas.service';
import { Router } from '@angular/router';
declare function DesplegarMensajeAdmin(strTipo, strMensaje): any;

@Component({
  selector: 'app-mantenimiento-personas',
  templateUrl: './mantenimiento-personas.component.html',
  styleUrls: ['./mantenimiento-personas.component.css']
})
export class MantenimientoPersonasComponent implements OnInit {

  constructor(private _adminPersonasService:AdminPersonasService, private router: Router) { }

  personas = [];
  /*
  personas = [
    { id_persona: "1", nombres: "Mario Augusto", apellidos: "Rodríguez Salvatierra", fecha_modificacion: "2018-06-12 07:00:00" },
    { id_persona: "2", nombres: "Diego Armando", apellidos: "Fernandez Castillo", fecha_modificacion: "2018-06-11 08:00:00" }
  ];
  */

  ngOnInit() {
    this.ObtenerPersonas();
  }

  IrAFormularioAgregar(){
    this.router.navigate(['formP/agregar/0']);
  }

  ObtenerPersonas()
  {
	  this._adminPersonasService.getPersonas()
	  .subscribe(data=>{
		if(data.code==1){
          this.personas = data.data.body;
        }else{
          DesplegarMensajeAdmin("Error", data.message);
        }
	  });
  }

}
