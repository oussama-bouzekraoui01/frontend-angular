import { Component, OnInit } from '@angular/core';
import {ProjectModel} from "../services/project.model";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(private projectService : ProjectService) { }
  projects !: Array<ProjectModel>
  imageUrl = 'https://www.excelway.co/wp-content/uploads/2021/03/logo-color-h.svg';
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe({
      next : (data) => {this.projects = data},
      error : (err) => {console.log(err)}
    })

  }

  onDeleteProject(id : string) {
    return this.projectService.deleteProject(id).subscribe({
      next : (data) => {alert("project deleted successfully")},
      error : (err) => {alert("error")}
    })
  }

}
