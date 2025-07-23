import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, description: 'Finalizar projeto Angular', completed: false, dueDate: new Date() },
    { id: 2, description: 'Estudar Signals', completed: true }
  ];

  handleTaskAdd(taskData: {description: string, dueDate?: Date | null}) {
    const newTask: Task = {
      id: Date.now(),
      description: taskData.description,
      completed: false,
      dueDate: taskData.dueDate || undefined 
    };
    this.tasks.push(newTask);
  }


  handleTaskRemove(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  handleTaskComplete(taskToUpdate: Task) {
    const task = this.tasks.find(t => t.id === taskToUpdate.id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }
}
