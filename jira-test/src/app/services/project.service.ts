import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from '../beans/project';

@Injectable()
export class ProjectService {
  private projectsUrl = 'api/project';
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(private http:Http) {}

  getProjects(): Promise<Project[]> {
    return this.http.get(this.projectsUrl).toPromise().then(response => response.json().data as Project[]).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}