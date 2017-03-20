import { Component, OnInit } from '@angular/core';
import { ProjectRow } from '../beans/project-row';
import { ProjectService } from '../services/project.service';

@Component({
  moduleId: module.id,
  selector: 'my-projects',
  templateUrl: '../views/projects.component.html'
})

export class ProjectsComponent implements OnInit {
  projects:ProjectRow[];
  constructor(
    private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }
}