import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  form: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    const { correo, password } = this.form.value;

    // Usuario simulado
    const usuarioValido = {
      correo: 'admin@eventos.com',
      password: '1234',
      nombre: 'Administrador'
    };

    if (correo === usuarioValido.correo && password === usuarioValido.password) {
      localStorage.setItem('usuario', JSON.stringify(usuarioValido));
      this.router.navigate(['/']);
    } else {
      this.error = 'Correo o contraseña incorrectos';
    }
  }
}
