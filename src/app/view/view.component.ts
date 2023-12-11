import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../services/project.service";
import {ProjectModel} from "../services/project.model";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route : ActivatedRoute, private projectService : ProjectService) { }

  project !: ProjectModel

  ngOnInit(): void {
    let id  = this.route.snapshot.params['id'];
    this.projectService.getProjectById(id).subscribe({
      next : (data) => {
        this.project= data;
      },
      error : (err) => {console.log(err)}
    })
  }

}
