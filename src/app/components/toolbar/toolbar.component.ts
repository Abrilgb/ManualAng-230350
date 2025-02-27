import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: `
    <mat-toolbar color="primary" class="sticky-toolbar">
      <span class="text-xl"font-bold>My App</span>
      
      <span class="spacer"></span>
      
      <nav>
        <button mat-button> Ejercicios</button>
        <button mat-button>Tareas</button>
        <button mat-button>Examen Practico</button>
        <button mat-button>Acera de </button>
      </nav>
      
      <span class="spacer"></span>
      
      <!-- Imagen de usuario con menú -->
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <img class="user-avatar" src="assets/user.jpg" alt="User avatar">
      </button>
      
      <mat-menu #menu="matMenu" bg-pink-700>
        <button mat-menu-item bg-pink-500>Perfil</button>
        <button mat-menu-item bg-pink-500>Cerrar Seción</button>
      </mat-menu>
    </mat-toolbar>`,
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
