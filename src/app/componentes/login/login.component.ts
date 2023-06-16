// LoginComponent.ts
import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ServiciosService } from '../services/servicios.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario[];
  USUARIO: string;
  CONTRASENA: string;
  loginData: any;

  usuarios: Usuario = new Usuario();
  formData = {
    username: '',
    password: ''
  };

  constructor( private service: ServiciosService, private router: Router, private http: HttpClient) {}

  // LoginComponent.ts
validarUsuario() {
  const { username, password } = this.formData;

  this.service.login(username, password).subscribe(
    users => {
      const user = users.find(u => u.CEDULAPERSONAL === username && u.CONTRASENAPERSONAL === password);

      if (user) {
        if (user.ROLPERSONAL === 'ADMINISTRADOR') {
          console.log('Inicio de sesión exitoso como ADMINISTRADOR');
          alert('Inicio de sesión exitoso como ADMINISTRADOR');
          this.service.setLoginData({ username: user.CEDULAPERSONAL }); // Guardar los datos del inicio de sesión en el AuthService
          this.router.navigate(['/admin']);
        } else if (user.ROLPERSONAL === 'MIEMBRO') {
          console.log('Inicio de sesión exitoso como MIEMBRO');
          alert('Inicio de sesión exitoso como MIEMBRO');
          this.service.setLoginData({ username: user.CEDULAPERSONAL }); // Guardar los datos del inicio de sesión en el AuthService
          this.router.navigate(['/miembros']);
        } else if (user.ROLPERSONAL === 'GERENTE') {
          console.log('Inicio de sesión exitoso como GERENTE');
          alert('Inicio de sesión exitoso como GERENTE');
          this.service.setLoginData({ username: user.CEDULAPERSONAL }); // Guardar los datos del inicio de sesión en el AuthService
          this.router.navigate(['/generente']);
        }
      } else {
        console.log('Usuario o contraseña incorrectos');
        alert('Usuario o contraseña incorrectos');
        // Limpiar campos de usuario y contraseña
        this.formData.username = '';
        this.formData.password = '';
      }
    },
    error => {
      console.error('Error en la autenticación', error);
      this.formData.username = '';
      this.formData.password = '';
    }
  );
}

}
