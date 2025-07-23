import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-form',
  standalone: false,
  templateUrl: './add-task-form.html',
  styleUrl: './add-task-form.css'
})
export class AddTaskFormComponent {

  newTaskDescription: string = '';
  newTaskDueDate?: Date | null = null;

  @Output() taskAdded = new EventEmitter<{description: string, dueDate?: Date | null}>();

  addTask() {
    const dueDate = this.newTaskDueDate ? new Date(this.newTaskDueDate) : undefined;
    this.taskAdded.emit({
      description: this.newTaskDescription,
      dueDate: dueDate
    });
  }
}

