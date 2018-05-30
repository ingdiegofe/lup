import { Component, OnInit } from '@angular/core';
import { AdminUsuariosService } from '../../../services/admin/admin-usuarios/admin-usuarios.service';
import { Router } from '@angular/router';
declare function DesplegarMensajeAdmin(strTipo, strMensaje): any;

@Component({
  selector: 'app-mantenimiento-usuarios',
  templateUrl: './mantenimiento-usuarios.component.html',
  styleUrls: ['./mantenimiento-usuarios.component.css']
})
export class MantenimientoUsuariosComponent implements OnInit {

  usuarios = [];
  
  constructor(private _adminUsuariosService:AdminUsuariosService, private router: Router) { }

  ngOnInit() {
    this.ObtenerUsuarios();
  }



  ObtenerUsuarios()
  {
	  this._adminUsuariosService.getUsuarios()
	  .subscribe(data=>{
		if(data.code==1){
          this.usuarios = data.data.body;
        }else{
          DesplegarMensajeAdmin("Error", data.message);
        }
	  });
  }
}
