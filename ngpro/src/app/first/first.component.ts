import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  template: `
  <p>first works!: {{ newProject }}</p>
  `,
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  newProject = 'this is a new Project pals!' 
  taskTitle = '';
  isComplete = false;
  completeTask() {
    this.isComplete = true;
  }
  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }
}
