import { Component, OnInit } from '@angular/core';
import { Project } from '../beans/project';
import { ProjectService } from '../services/project.service';

@Component({
  moduleId: module.id,
  selector: 'my-projects',
  templateUrl: '../views/projects.component.html'
})

export class ProjectsComponent implements OnInit {
  projects:Project[];
  constructor(
    private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }
}