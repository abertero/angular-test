import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from './services/project.service';

import { AppComponent }  from './app.component';
import { ProjectsComponent } from './components/projects.component';

import { AppRoutingModule }  from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory/in-memory-project.service';

@NgModule({
  imports:      [ 
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    ProjectsComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ 
    ProjectService 
  ]
})
export class AppModule { }
