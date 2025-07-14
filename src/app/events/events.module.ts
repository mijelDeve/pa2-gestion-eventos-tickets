import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './pages/event-list/event-list.component';

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule
  ],
  exports: [EventListComponent]
})
export class EventsModule { }
