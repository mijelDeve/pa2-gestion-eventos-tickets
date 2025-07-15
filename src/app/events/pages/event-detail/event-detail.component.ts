import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  imports: [CommonModule]
})
export class EventDetailComponent {
  eventId!: number;
  event: any;

  private dummyEvents = [
    {
      id: 1,
      title: 'Concierto de Rock',
      date: '2025-08-01',
      location: 'Lima',
      description: 'Un concierto con las mejores bandas nacionales.',
      status: 'activo',
      price: 50,
      imageSrc: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      title: 'Feria de Libros',
      date: '2025-08-10',
      location: 'Cusco',
      description: 'Evento cultural con editoriales y autores invitados.',
      status: 'cancelado',
      price: 0,
      imageSrc: 'https://picsum.photos/200/300'
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.eventId = +params['id'];
      this.event = this.dummyEvents.find(e => e.id === this.eventId);
    });
  }
}
