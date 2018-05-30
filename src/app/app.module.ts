import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';
import * as bootstrap from "bootstrap";

//Rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { Globals } from './globals';
import { LoginService } from './services/login/login.service';
import { UsuarioService } from './services/usuario/usuario.service';
import { AdminEmpresasService } from './services/admin/admin-empresas/admin-empresas.service';

import { AppComponent } from './app.component';
import { NavbarInComponent } from './components/shared/navbar-in/navbar-in.component';
import { NavbarLogComponent } from './components/shared/navbar-log/navbar-log.component';
import { CarouselComponent } from './components/inicio/carousel/carousel.component';
import { HomeComponent } from './components/inicio/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContenidoComponent } from './components/inicio/contenido/contenido.component';
import { FaqComponent } from './components/inicio/faq/faq.component';
import { AyudaComponent } from './components/inicio/ayuda/ayuda.component';
import { NosotrosComponent } from './components/inicio/nosotros/nosotros.component';
import { DomseguroPipe } from './pipe/domseguro.pipe';
import { RegistrarComponent } from './components/inicio/registrar/registrar.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { InicioComponent } from './components/home/inicio/inicio.component';
import { IzquierdaComponent } from './components/home/izquierda/izquierda.component';
import { CentroComponent } from './components/home/centro/centro.component';
import { DerechaComponent } from './components/home/derecha/derecha.component';
import { ConfComponent } from './components/home/conf/conf.component';
import { EmpresaComponent } from './components/home/empresa/empresa.component';
import { CatEmpresaComponent } from './components/home/cat-empresa/cat-empresa.component';
import { SubEmpresaComponent } from './components/home/sub-empresa/sub-empresa.component';
import { AccionComponent } from './components/home/accion/accion.component';
import { BlogComponent } from './components/home/blog/blog.component';
import { HomelComponent } from './components/AdmLup/homel/homel.component';
import { HomeeComponent } from './components/AdmEmpresa/homee/homee.component';
import { NavbarAdminComponent } from './components/shared/navbar-admin/navbar-admin.component';
import { MantenimientoEmpresasComponent } from './components/AdmLup/mantenimiento-empresas/mantenimiento-empresas.component';
import { FormularioEmpresaComponent } from './components/AdmLup/formulario-empresa/formulario-empresa.component';
import { LoaderAdminComponent } from './components/shared/loader-admin/loader-admin.component';
import { MensajeAdminComponent } from './components/shared/mensaje-admin/mensaje-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarInComponent,
    NavbarLogComponent,
    CarouselComponent,
    HomeComponent,
    FooterComponent,
    ContenidoComponent,
    FaqComponent,
    AyudaComponent,
    NosotrosComponent,
    DomseguroPipe,
    RegistrarComponent,
    LoginComponent,
    InicioComponent,
    IzquierdaComponent,
    CentroComponent,
    DerechaComponent,
    ConfComponent,
    EmpresaComponent,
    CatEmpresaComponent,
    SubEmpresaComponent,
    AccionComponent,
    BlogComponent,
    HomelComponent,
    HomeeComponent,
    NavbarAdminComponent,
    MantenimientoEmpresasComponent,
    FormularioEmpresaComponent,
    LoaderAdminComponent,
    MensajeAdminComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    Globals,
    LoginService,
    UsuarioService,
	AdminEmpresasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
