import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { VistaMiembrosComponent } from './componentes/vista-miembros/vista-miembros.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'miembros', component: VistaMiembrosComponent
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
