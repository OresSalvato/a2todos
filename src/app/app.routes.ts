import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonCardListComponent } from './components/person-card/person-card-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo/todo-list.component';
import { PictureListComponent } from './components/picture/picture-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ExamplesComponent } from './components/examples/examples.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'todo', component: TodoListComponent },
    { path: 'todo/add', component: TodoComponent },
    { path: 'persons', component: PersonCardListComponent },
    { path: 'persons/add', component: PersonCardComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'picture', component: PictureListComponent },
    { path: 'examples', component: ExamplesComponent }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
