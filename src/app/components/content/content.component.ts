import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  imports: [RouterOutlet] // Importar RouterOutlet
})
export class ContentComponent {}
