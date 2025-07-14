import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './events/pages/event-list/event-list.component';

export const routes: Routes = [
    { path: '', component: EventListComponent },
    { path: 'eventos', component: EventListComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }