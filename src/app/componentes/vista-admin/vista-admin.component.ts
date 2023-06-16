import { Component } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent {
  formData = {
    apellido: '',
    cedula: '',
    nombre: '',
    contrasena: '',
    rol: '',
    disponibilidad: ''
  };

  constructor (private service: ServiciosService){}

  
  prueba(){
    alert('orncffjs');
  }
  insertarPersonal() {
    const { apellido, cedula, nombre, contrasena, rol, disponibilidad } = this.formData;
    
    this.service.nuevoPersonal({
      CEDULAPERSONAL:this.formData.cedula ,
      CONTRASENAPERSONAL: this.formData.contrasena,
      NOMBREPERSONAL: this.formData.nombre,
      APELLIDOPERSONAL: this.formData.apellido,
      ROLPERSONAL: this.formData.rol,
      DISPOPERSONAL:this.formData.disponibilidad
    });
  }

}

