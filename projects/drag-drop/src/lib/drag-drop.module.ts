import { NgModule } from '@angular/core';
import { DragDropComponent } from './drag-drop.component';
import { DndModule } from 'ngx-drag-drop';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DragDropComponent],
  imports: [
    DndModule,
    BrowserModule
  ],
  exports: [DragDropComponent]
})
export class DragDropModule { }
