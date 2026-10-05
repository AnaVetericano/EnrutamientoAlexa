import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Registro {

  usuario = {
    username: '',
    email: '',
    password: '',
    rol: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  registro() {

    if (
      this.usuario.username !== '' &&
      this.usuario.email !== '' &&
      this.usuario.password !== '' &&
      this.usuario.rol !== ''
    ) {

      this.http.post(
        'http://127.0.0.1:8000/api/usuarios/registro/',
        this.usuario
      ).subscribe({

        next: (respuesta: any) => {

          console.log(respuesta);

          if (respuesta.mensaje && respuesta.token) {

            alert(respuesta.mensaje);

            localStorage.setItem('token', respuesta.token);
            localStorage.setItem('rol', respuesta.rol);
            localStorage.setItem('usuario', respuesta.usuario);

            if (respuesta.rol === 'administrador') {
              this.router.navigate(['/dashboard/admin']);
            } else if (respuesta.rol === 'supervisor') {
              this.router.navigate(['/dashboard/supervisor']);
            }

          }

        },

        error: (error) => {
          console.log(error);
          alert('Error al registrar: ' + (error.error?.mensaje || 'intente de nuevo'));
        }

      });

    } else {
      alert('Todos los campos son obligatorios, incluyendo el rol');
    }

  }

}