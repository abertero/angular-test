import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ProjectResponse } from '../beans/project-response';

@Injectable()
export class JiraService {
  authStr = 'abertero:antica';
  jiraUrl = 'http://work/jira/rest/api/latest/';

  constructor(private http:Http) {}

  getBase64AuthStr(src: any) {
    return btoa(src);
  }

  getHeaders(): Headers {
    var authStrEnc = this.getBase64AuthStr(this.authStr);
    return new Headers({'Content-Type': 'application/json', 'Authentication': 'Base '+authStrEnc});
  }

  getProjects(): Promise<ProjectResponse[]> {
    var projectUrl = this.jiraUrl+"project"
    var headers = this.getHeaders();
    return this.http.get(projectUrl, {headers: headers}).toPromise().then(response => response.json().data as ProjectResponse[]).catch(this.handleError);
  }

  getUrl(): string {
    return this.jiraUrl;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}