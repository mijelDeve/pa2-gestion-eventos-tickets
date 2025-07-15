import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css'],
  imports: [CommonModule, RouterModule]
})
export class MyTicketsComponent {
  tickets = [
    {
      id: 1,
      eventoId: 1,
      tituloEvento: 'Concierto de Rock',
      cantidad: 2,
      total: 100,
      fechaCompra: '2025-07-15',
      imageSrc: 'https://img.freepik.com/vector-premium/cartel-fiesta-noche-rock-volantes-ilustracion-estilo-vintage_148087-269.jpg?semt=ais_hybrid&w=740'
    },
    {
      id: 2,
      eventoId: 2,
      tituloEvento: 'Feria de Libros',
      cantidad: 1,
      total: 0,
      fechaCompra: '2025-07-14',
      imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-music-party-flyer-design-template-360c916896c61b12dabe7d2ca605156a_screen.jpg?ts=1707738686'
    }
  ];
}
