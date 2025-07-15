import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class UserProfileComponent {
  form: FormGroup;
  editing = false;

  user = {
    nombre: 'Miguel Castillo',
    correo: 'miguel.castillo@example.com',
    fechaRegistro: '2024-01-10',
    estado: 'activo',
    avatar: 'https://i.pravatar.cc/150?img=12'
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [this.user.nombre],
      correo: [this.user.correo]
    });
  }

  editar() {
    this.editing = true;
  }

  cancelar() {
    this.form.patchValue({
      nombre: this.user.nombre,
      correo: this.user.correo
    });
    this.editing = false;
  }

  guardar() {
    if (this.form.valid) {
      this.user.nombre = this.form.value.nombre;
      this.user.correo = this.form.value.correo;
      this.editing = false;
      alert('Datos actualizados');
    }
  }
}
