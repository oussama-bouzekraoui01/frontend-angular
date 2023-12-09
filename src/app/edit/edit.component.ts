import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProjectModel} from "../services/project.model";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editFromGroup !: FormGroup;
  project !: ProjectModel;
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private productService:ProjectService) { }

  ngOnInit(): void {
    let id  = this.route.snapshot.params['id'];

    this.productService.getProjectById(id).subscribe({
      next : (data) => {
        this.project = data
        this.editFromGroup = this.fb.group({
          title : this.fb.control(this.project.title),
          description : this.fb.control(this.project.description),
          priority : this.fb.control(this.project.priority)
        })
      }
    })

  }

  onEditProject() {
    let p = this.editFromGroup.value;
    p.id = this.project.id
    this.productService.updateProject(p).subscribe({
      next : (proj) => alert("ProjectModel updated successfully"),
      error : (err) => {console.log(err)}
    })
  }
}
