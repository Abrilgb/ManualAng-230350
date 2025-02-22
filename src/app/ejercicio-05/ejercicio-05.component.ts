import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  imports: [],
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css'
})
export class Ejercicio05Component {
  users = [
    {id: 0, name: 'Giovany'},
    {id: 1, name: 'Abril'},
    {id: 2, name: 'Angel'},
    {id: 3, name: 'Idai'},
    {id: 4, name: 'Abisha'},
  ];
}
