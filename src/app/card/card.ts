import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  projects = [
    {
      name: 'Tabuada dinâmica',
      description: 'Escolha um número de 1 a 9 para ver a tabuada',
      thumb: 'thumbs/tabuada.png',
      link: 'https://tabuada-dinamica.netlify.app'
    },
    {
      name: 'Circles Everywhere',
      description: 'Círculos coloridos que mudam de cor quando clicados',
      thumb: 'thumbs/circles.png',
      link: 'https://circles-everywhere.netlify.app'
    },
    {
      name: 'Jokenpô',
      description: 'Jogue jokenpô contra o computador',
      thumb: 'thumbs/jokenpo.png',
      link: 'https://jokenpo-carol.netlify.app'
    },
    {
      name: 'Angular',
      description: 'Meu primeiro projeto em Angular',
      thumb: 'thumbs/jokenpoangular.png',
      link: 'https://carol-angular.netlify.app'
    }
  ];

}
