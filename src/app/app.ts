import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logos } from './logos/logos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Logos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('carol-angular');
}
