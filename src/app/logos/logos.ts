import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos.html',
  styleUrls: ['./logos.css'],
})
export class Logos {
  logos = [
    'assets/logos/logo1.png',
    'assets/logos/logo2.png',
    'assets/logos/logo3.png',
    'assets/logos/logo4.png',
    'assets/logos/logo5.png'
  ]
}
