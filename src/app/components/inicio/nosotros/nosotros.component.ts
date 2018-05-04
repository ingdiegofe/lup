import { Component, OnInit } from '@angular/core';


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  strTitulo:string = "Acerca de LUP";
  strImg:string = "/img/Nosotros/por1.jpg"

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)

    $(document).ready(function() {
      $("#nosotros2").hide();
      $("#nosotros3").hide();
      $("#nosotros1").collapse('toggle');

   });

  }



  Cambio( lngCambio ){

    if (lngCambio == 1){
      this.strTitulo = "Acerca de LUP";
      this.strImg = "/img/Nosotros/por1.jpg";

      $("#nosotros2").collapse('hide');
      $("#nosotros3").collapse('hide');

    }
    if (lngCambio == 2){
      this.strTitulo = "Mision, Vision, Valores";
      this.strImg = "/img/Nosotros/por2.jpg";

      $("#nosotros1").collapse('hide');
      $("#nosotros3").collapse('hide');
      $("#nosotros2").show();
    }
    if (lngCambio == 3){
      this.strTitulo = "Integrantes";
      this.strImg = "/img/Nosotros/por3.jpg";

      $("#nosotros1").collapse('hide');
      $("#nosotros2").collapse('hide');
      $("#nosotros3").show();
    }



  }

}
