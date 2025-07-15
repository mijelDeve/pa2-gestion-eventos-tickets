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
    { id: 1, title: 'Concierto de Rock', date: '2025-08-01', location: 'Jr. Montero rosas 1294', imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rock-music-party-flyer-design-template-360c916896c61b12dabe7d2ca605156a_screen.jpg?ts=1707738686' },
    { id: 2, title: 'Feria de Libros', date: '2025-08-10', location: 'Jr. ayacucho 1249', imageSrc: 'https://img.freepik.com/vector-premium/cartel-fiesta-noche-rock-volantes-ilustracion-estilo-vintage_148087-269.jpg?semt=ais_hybrid&w=740' },
  ];

  carouselImages = [
  'assets/images/carousel/evento1.jpg',
  'assets/images/carousel/evento2.jpg',
  'assets/images/carousel/evento3.jpg'
];

currentIndex = 0;

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
}

prevSlide() {
  this.currentIndex =
    (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
}
}
