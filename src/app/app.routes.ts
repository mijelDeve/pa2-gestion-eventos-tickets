import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './events/pages/event-list/event-list.component';
import { EventDetailComponent } from './events/pages/event-detail/event-detail.component';
import { EventCreateComponent } from './events/pages/event-create/event-create.component';
import { MyTicketsComponent } from './tickets/pages/my-tickets/my-tickets.component';
import { UserProfileComponent } from './auth/pages/use-profile/user-profile.component';

export const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'evento/:id', component: EventDetailComponent },
  { path: 'crear', component: EventCreateComponent },
  { path: 'mis-tickets', component: MyTicketsComponent },
  { path: 'perfil', component: UserProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }