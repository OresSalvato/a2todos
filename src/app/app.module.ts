import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';
// components
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo/todo-list.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonCardListComponent } from './components/person-card/person-card-list.component';

import { PictureComponent } from './components/picture/picture.component';
import { PictureListComponent } from './components/picture/picture-list.component';
import { IssueComponent } from './components/issue/issue.component';
import { IssueListComponent } from './components/issue/issue-list.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

import { PaneComponent } from './components/examples/pane.component';

// services 
import { TodoService } from './services/todo.service';
import { PersonCardService } from './services/person-card.service';
import { IssueService } from './services/issue.service';
import { PictureService } from './services/picture.service';

import {RoutingModule} from './app.routes';
// globals
import { Globals } from './globals';
import { ExamplesComponent } from './components/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PersonCardComponent,
    PersonCardListComponent,
    HomeComponent,
    PictureComponent,
    PictureListComponent,
    IssueComponent,
    IssueListComponent,
    TodoListComponent,
    LoginComponent,
    AdminComponent,
    PaneComponent,
    ExamplesComponent
  ],
  imports: [
    AlertModule,
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    Globals,
    TodoService,
    PersonCardService,
    IssueService,
    PictureService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule { }
