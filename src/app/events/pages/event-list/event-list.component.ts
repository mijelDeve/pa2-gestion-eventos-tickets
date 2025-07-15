import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ importa esto

@Component({
  standalone: true,
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  imports: [CommonModule, RouterModule] // ✅ agrégalo aquí
})
export class EventListComponent {
  events = [
    { id: 1, title: 'Concierto de Rock', date: '2025-08-01', location: 'Jr. Montero rosas 1294', imageSrc: 'https://picsum.photos/200/300' },
    { id: 2, title: 'Feria de Libros', date: '2025-08-10', location: 'Jr. ayacucho 1249', imageSrc: 'https://picsum.photos/200/300' },
  ];
}
