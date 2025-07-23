import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './components/task-list/task-list';
import { TaskItemComponent } from './components/task-item/task-item';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    AddTaskFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TasksModule { }
