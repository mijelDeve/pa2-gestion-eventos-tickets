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
      imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-music-party-flyer-design-template-360c916896c61b12dabe7d2ca605156a_screen.jpg?ts=1707738686'
    },
    {
      id: 2,
      title: 'Feria de Libros',
      date: '2025-08-10',
      location: 'Cusco',
      description: 'Evento cultural con editoriales y autores invitados.',
      status: 'cancelado',
      price: 0,
      imageSrc: 'https://img.freepik.com/vector-premium/cartel-fiesta-noche-rock-volantes-ilustracion-estilo-vintage_148087-269.jpg?semt=ais_hybrid&w=740'
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.eventId = +params['id'];
      this.event = this.dummyEvents.find(e => e.id === this.eventId);
    });
  }
}
