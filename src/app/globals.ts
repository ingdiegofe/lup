import { Injectable } from '@angular/core';

@Injectable()
export class Globals{
  url:string;
  Login:string;
  Usuario: string;
  Email:string;
  Pais:string;
  UsuarioR:string;
  Persona:string;
  MantEmpresas: string;
  MantUsuarios: string;

  //LUP
  vision:string;
  mision:string;
  valores:string;
  historia:string;


  constructor(){
    this.url = "http://localhost:3010";
    this.Login = this.url + "/login";
    this.Usuario = this.url + "/ad/usuario";
    this.UsuarioR = this.url + "/ad/usuario_registro";
    this.Persona = this.url + "/ad/persona";
    this.Pais = this.url + "/ad/pais";
    this.Email = this.url + "/correo";
    this.MantEmpresas = this.url + "/admin-empresas";
    this.MantUsuarios = this.url + "/admin-usuarios";



    this.vision = "Ser el principal motor del \
                  mercado económico a nivel mundial, impulsando al emprendedor  \
                  de pequeña y mediana empresa a cumplir sus sueños y propósitos \
                   con ayuda colectiva."


    this.mision = "Crear el impulso financiero mediante puentes económicos. \
                  Ofreciendo herramientas tecnológicas para inversionistas y empresas."

    this.valores = "Trabajamos mediante valores y una ética moral que nos permite  " +
                  "tener la confianza de nuestros socios, accionistas e inversionistas " +
                  "como podemos mencionar algunos pilares de nuestra entidad: <br> " +
                  "<li> SERVICIOS DE INFORMACIÓN GLOBAL y TENDENCIAS MACRO Y MICRO ECONOMICAS. <\li>" +
                  "<li> SOLUCIONES CORPORATIVAS<\li> " +
                  "<li> ASESORIAS ESTRATEGICAS <\li>" +
                  "<li> APORTE TECNOLOGICO <\li> " +
                  "<li> INNOVACIÓN <\li> " +
                  "<li> HONESTIDAD <\li> " +
                  "<li> JUSTICIA <\li>";


    this.historia = "LUP ® es una entidad creada para ser el laso, conexión y  \
                    puente financiero entre el inversionista y la pequeña y mediana empresa.  \
                    Nuestros principales aliados son los emprendedores que buscan \
                    cambiar la dirección del país, mediante la creación de nuevos \
                    puestos de trabajo e iniciativas relevantes que den una mayor \
                    generación de frutos económicamente sostenibles en el tiempo. \
                    INVERSIONITAS: \
                    Nuestro principal objetivo es dar al socio inversionista una amplia gama de oportunidades de inversión y asesoría empresarial para generar una sana inversión que perdure mediante valiosa información para una toma de decisiones con riesgo calculado.\
                    Empresas cotizadas: \
                    Buscamos empresas con un valor agregado en el mercado, con ideas retadoras y deseo de éxito total.  \
                    Mediante un análisis por profesionales en la materia; nuestro mayor deseo es hacer que los sueños de aquellos empresarios-emprendedores sean realidad. "

  }
}
