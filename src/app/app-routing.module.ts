import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { VistaMiembrosComponent } from './componentes/vista-miembros/vista-miembros.component';
import { VistaAdminComponent } from './componentes/vista-admin/vista-admin.component';
import { VistaGerenteComponent } from './componentes/vista-gerente/vista-gerente.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'miembros', component: VistaMiembrosComponent
  },
  {
    path: 'admin', component: VistaAdminComponent
  },
  {
    path: 'generente', component: VistaGerenteComponent
  },
  {
    path: '**', redirectTo:'', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

