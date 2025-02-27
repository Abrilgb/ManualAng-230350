import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  
    RouterOutlet,
    MatButtonModule,
    ToolbarComponent,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230574';
  isSidebarVisible: boolean = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log("Sidebar estado:", this.isSidebarVisible);
  }
}
