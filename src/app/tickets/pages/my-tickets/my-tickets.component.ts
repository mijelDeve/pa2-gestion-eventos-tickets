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
      imageSrc: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      eventoId: 2,
      tituloEvento: 'Feria de Libros',
      cantidad: 1,
      total: 0,
      fechaCompra: '2025-07-14',
      imageSrc: 'https://picsum.photos/200/300'
    }
  ];
}
