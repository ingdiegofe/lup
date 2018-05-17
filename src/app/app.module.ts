import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { Globals } from './globals';
import { LoginService } from './services/login/login.service';
import { UsuarioService } from './services/usuario/usuario.service';

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
    HomeeComponent
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
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
