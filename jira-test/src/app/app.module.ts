import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from './services/project.service';
import { JiraService } from './services/jira.service';

import { AppComponent }  from './app.component';
import { ProjectsComponent } from './components/projects.component';
import { ProjectResponseComponent } from './components/project-response.component';

import { AppRoutingModule }  from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryProjectService }  from './in-memory/in-memory-project.service';

@NgModule({
  imports:      [ 
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProjectService),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    ProjectsComponent,
    ProjectResponseComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ 
    ProjectService,
    JiraService
  ]
})
export class AppModule { }
