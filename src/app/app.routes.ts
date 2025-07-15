import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './events/pages/event-list/event-list.component';
import { EventDetailComponent } from './events/pages/event-detail/event-detail.component';

export const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'evento/:id', component: EventDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }