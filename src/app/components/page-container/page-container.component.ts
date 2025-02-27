import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { ContentComponent } from "../content/content.component";


@Component({
  selector: 'app-page-container',
  imports: [SidebarComponent, RouterModule, NgClass, ContentComponent],
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  isSidebarVisible = false; // Inicia oculta
    isOpen = true; // Estado del sidebar

    toggleSidebar() {
      this.isOpen = !this.isOpen;
    
    }
}
