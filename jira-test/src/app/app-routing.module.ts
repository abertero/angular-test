import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent }   from './components/projects.component';
import { ProjectResponseComponent }   from './components/project-response.component';

const routes: Routes = [
  { path: 'projects',  component: ProjectsComponent },
  { path: 'project-response', component: ProjectResponseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
