import { Component, OnInit } from '@angular/core';
import { ProjectResponse } from '../beans/project-response';
import { JiraService } from '../services/jira.service';

@Component({
  moduleId: module.id,
  selector: 'my-project-response',
  templateUrl: '../views/project-response.component.html'
})

export class ProjectResponseComponent implements OnInit {
  projectsResponse:ProjectResponse[];
  constructor(
    private jiraService: JiraService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.jiraService.getProjects().then(projects => this.projectsResponse = projects);
  }
}