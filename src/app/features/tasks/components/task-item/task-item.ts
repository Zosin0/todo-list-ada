import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})

export class TaskItemComponent {

  @Input() taskItem!: Task;

  @Output() taskCompleted = new EventEmitter<Task>();
  @Output() taskRemoved = new EventEmitter<number>();

  completeTask() {
    this.taskCompleted.emit(this.taskItem);
  }

  removeTask() {
    this.taskRemoved.emit(this.taskItem.id);
  }
}
