import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from 'drag-drop'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
