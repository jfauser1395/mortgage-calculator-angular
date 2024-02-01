import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponent],
  template: `
    <div>
      <h1>This is my first Angular application</h1>
      <app-first></app-first>
    </div>
    `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
