import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio01Component, Ejercicio02Component, Ejercicio03Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualAng-230350';
}
