import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  imports: [CommonModule]
})
export class EventListComponent {
  events = [
    { title: 'Concierto de Rock', date: '2025-08-01', location: 'Lima' },
    { title: 'Feria de Libros', date: '2025-08-10', location: 'Cusco' },
  ];
}