import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  usuario = {
    username: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {

    this.http.post(
      'http://127.0.0.1:8000/api/usuarios/login/',
      this.usuario
    ).subscribe({

      next: (respuesta: any) => {

        console.log(respuesta);

        alert(respuesta.mensaje);

        if (respuesta.token) {

          localStorage.setItem('token', respuesta.token);
          localStorage.setItem('rol', respuesta.rol);
          localStorage.setItem('usuario', respuesta.usuario);

          if (respuesta.rol === 'administrador') {
            this.router.navigate(['/dashboard/admin']);
          }
          else if (respuesta.rol === 'supervisor') {
            this.router.navigate(['/dashboard/supervisor']);
          }
          else {
            alert('Rol no reconocido');
          }

        }

      },

      error: (error) => {
        console.log(error);
        alert('Usuario o contrasena incorrectos');
      }

    });

  }

  registro() {
    this.router.navigate(['/register']);
  }

}