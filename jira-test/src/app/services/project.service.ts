import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ProjectRow } from '../beans/project-row';
import { JiraService } from './jira.service';

import { ProjectResponse } from '../beans/project-response';

@Injectable()
export class ProjectService {
  private projectsUrl = 'api/projects';

  constructor(private http:Http, private jiraService:JiraService) {}

  getProjects(): Promise<ProjectRow[]> {
    return this.http.get(this.projectsUrl).toPromise().then(response => response.json().data as ProjectRow[]).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}