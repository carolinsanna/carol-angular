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
    'logos/azure.svg',
    'logos/debian.svg',
    'logos/electron.svg',
    'logos/filezilla.svg',
    'logos/git.svg',
    'logos/graphql.svg',
    'logos/html-5.svg',
    'logos/insomnia.svg',
    'logos/javascript.svg',
    'logos/node.svg',
    'logos/npm.svg',
    'logos/raspberry-pi.svg',
    'logos/reactjs.svg',
    'logos/salesforce.svg',
    'logos/tailwind.svg',
    'logos/vitejs.svg',
    'logos/vscode.svg',
    'logos/vue.svg',
  ]
}
