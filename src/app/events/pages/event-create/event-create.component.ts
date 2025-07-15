import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EventCreateComponent {
  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      capacity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const newEvent = this.form.value;
    console.log('Evento creado:', newEvent);
    alert('Evento creado con éxito');
    this.form.reset();
  }
}

