// VistaMiembrosComponent.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tareas } from 'src/app/models/tareas';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-vista-miembros',
  templateUrl: './vista-miembros.component.html',
  styleUrls: ['./vista-miembros.component.css']
})
export class VistaMiembrosComponent implements OnInit {
  tareas: Tareas[];
  tareasPendientes: Tareas[];
  tareasCompletadas: Tareas[];
  tareasEnProceso: Tareas[];
  loginData: any;

  @ViewChild('formModal') formModal: any;
  @ViewChild('formModalNuevo') formModalNuevo: any;


  constructor(private service: ServiciosService) {}

  // VistaMiembrosComponent.ts
ngOnInit(): void {
  this.loginData = this.service.getLoginData(); // Obtén los datos del inicio de sesión desde el AuthService

  if (this.loginData && this.loginData.username) {
    const username = this.loginData.username;

    this.service.getDetalleTareas().subscribe((detalleTareas: any[]) => {
      const tareasUsuarioLogueado = detalleTareas
        .filter((detalleTarea: any) => detalleTarea.ID_PERSONAL === username)
        .map((detalleTarea: any) => detalleTarea.ID_TAREA);

      this.service.getTareas().subscribe((tareas: any[]) => {
        //this.tareas = tareas; // Todas las tareas

        this.tareasPendientes = tareas.filter(tarea => tarea.ESTADO === 'PENDIENTE' && tareasUsuarioLogueado.includes(tarea.ID_TAREA));
        this.tareasCompletadas = tareas.filter(tarea => tarea.ESTADO === 'COMPLETADO' && tareasUsuarioLogueado.includes(tarea.ID_TAREA));
        this.tareasEnProceso = tareas.filter(tarea => tarea.ESTADO === 'PROGRESO' && tareasUsuarioLogueado.includes(tarea.ID_TAREA));
      });
    });
  } else {
    console.log('Datos de inicio de sesión no encontrados');
  }
}


  // Resto del código...
}
