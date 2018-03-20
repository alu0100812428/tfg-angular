import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { MainColumnComponent } from './main-column/main-column.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { TopBoxComponent } from './top-box/top-box.component';
import { FooterBoxComponent } from './footer-box/footer-box.component';
import { ModelItemComponent } from './model-item/model-item.component';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelConfigurationComponent } from './model-configuration/model-configuration.component';
import { IndexComponent } from './index/index.component';
import { ModeloComponent } from './modelo/modelo.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UserService } from './user.service';
import { ModelosService } from './modelos.service';
import { EjecucionesService } from './ejecuciones.service';
import { AuthguardGuard } from './authguard.guard';
import { PaginaModelosComponent } from './pagina-modelos/pagina-modelos.component';
import { IndexMainColumnComponent } from './index-main-column/index-main-column.component';
import { SubirModeloFormComponent } from './subir-modelo-form/subir-modelo-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { HeaderComponent } from './header/header.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EditarAlgoritmoComponent } from './editar-algoritmo/editar-algoritmo.component';
import { PaginaEjecucionesComponent } from './pagina-ejecuciones/pagina-ejecuciones.component';
import { ColumnaEjecucionesComponent } from './columna-ejecuciones/columna-ejecuciones.component';
import { ListaEjecucionesComponent } from './lista-ejecuciones/lista-ejecuciones.component';
import { ResumenEjecucionComponent } from './resumen-ejecucion/resumen-ejecucion.component';
import { DetalleEjecucionComponent } from './detalle-ejecucion/detalle-ejecucion.component';
import { EjecucionComponent } from './ejecucion/ejecucion.component';
import { ResumenListaEjecucionesComponent } from './resumen-lista-ejecuciones/resumen-lista-ejecuciones.component';
import { ColumnaResumenEjecucionesComponent } from './columna-resumen-ejecuciones/columna-resumen-ejecuciones.component';
import { PaginaResumenEjecucionesComponent } from './pagina-resumen-ejecuciones/pagina-resumen-ejecuciones.component';
import { DetallesResumenComponent } from './detalles-resumen/detalles-resumen.component';
import { ListaDetallesResumenComponent } from './lista-detalles-resumen/lista-detalles-resumen.component';
import { PaginaConfAlgoritmoComponent } from './pagina-conf-algoritmo/pagina-conf-algoritmo.component';
import { TituloComponent } from './titulo/titulo.component';


const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'signup',
    component: RegisterFormComponent
  },
  {
    path: 'index',
    //canActivate: [AuthguardGuard],
    component: IndexComponent
  },
  {
    path: 'algoritmos',
    //canActivate: [AuthguardGuard],
    component: PaginaModelosComponent
  },
  {
    path: 'perfil',
    //canActivate: [AuthguardGuard],
    component: PerfilComponent
  },
  {
    path: 'subiralgoritmo',
    //canActivate: [AuthguardGuard],
    component: SubirModeloFormComponent
  },
  {
    path: 'algoritmos/:id',
    //canActivate: [AuthguardGuard],
    component: EditarAlgoritmoComponent
  },
  {
    path: 'ejecuciones',
    component: PaginaResumenEjecucionesComponent
  },
  {
    path: 'resumen_ejecucion/:id',
    //canActivate: [AuthguardGuard],
    component: PaginaEjecucionesComponent
  },
  {
    path: 'configurar_algoritmo/:id',
    //canActivate: [AuthguardGuard],
    component: PaginaConfAlgoritmoComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MainColumnComponent,
    LeftColumnComponent,
    TopBoxComponent,
    FooterBoxComponent,
    ModelItemComponent,
    ModelListComponent,
    ModelConfigurationComponent,
    IndexComponent,
    ModeloComponent,
    LoginFormComponent,
    PerfilComponent,
    PaginaModelosComponent,
    IndexMainColumnComponent,
    SubirModeloFormComponent,
    RegisterFormComponent,
    UsuarioComponent,
    ListaUsuarioComponent,
    HeaderComponent,
    CabeceraComponent,
    EditarAlgoritmoComponent,
    PaginaEjecucionesComponent,
    ColumnaEjecucionesComponent,
    ListaEjecucionesComponent,
    ResumenEjecucionComponent,
    DetalleEjecucionComponent,
    EjecucionComponent,
    ResumenListaEjecucionesComponent,
    ColumnaResumenEjecucionesComponent,
    PaginaResumenEjecucionesComponent,
    DetallesResumenComponent,
    ListaDetallesResumenComponent,
    PaginaConfAlgoritmoComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,ModelosService,EjecucionesService,AuthguardGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }


