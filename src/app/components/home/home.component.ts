import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Lista de imágenes para el carrusel
  images = [
    'assets/images/bubble.jpeg',
    'assets/images/alle.jpeg',
    'assets/images/playa.jpeg',
  ];

  // Índice de la imagen actual
  currentIndex = 0;

  // Función para mostrar la siguiente imagen
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Función para mostrar la imagen anterior
  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
