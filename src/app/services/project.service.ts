import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectModel} from "./project.model";



@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects!:  Array<ProjectModel>;

  constructor(private httpClient : HttpClient) {

  }




  public getAllProjects() : Observable<any> {
    return this.httpClient.get("http://localhost:3000/projects");
  }


  public addProject(p : ProjectModel) : Observable<any>{
    return this.httpClient.post("http://localhost:3000/projects/add",p);
  }

  getProjectById(id : string) : Observable<any> {
    return this.httpClient.get("http://localhost:3000/projects/"+id)
  }

  public deleteProject(id : string) : Observable<any> {
    return this.httpClient.delete("http://localhost:3000/projects/delete/" + id);
  }

  public updateProject(project : ProjectModel) : Observable<any>{
    return this.httpClient.put("http://localhost:3000/projects/edit/"+ project.id,project);
  }

}
