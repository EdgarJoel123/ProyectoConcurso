import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentesComponent } from './componentes/componentes.component';
import { VistaAdminComponent } from './componentes/vista-admin/vista-admin.component';
import { VistaGerenteComponent } from './componentes/vista-gerente/vista-gerente.component';
import { VistaMiembrosComponent } from './componentes/vista-miembros/vista-miembros.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    LoginComponent,
    VistaAdminComponent,
    VistaGerenteComponent,
    VistaMiembrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
