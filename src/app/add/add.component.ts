import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjectService} from "../services/project.service";
import {ProjectModel} from "../services/project.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addFormGroup! : FormGroup;
  project !: ProjectModel;

  constructor(private fb: FormBuilder, private service : ProjectService) { }

  ngOnInit(): void {
    this.addFormGroup = this.fb.group({
      title : this.fb.control(null),
      description : this.fb.control(null),
      priority : this.fb.control(null)
    })
  }

  handleAddProject() {

    let project = this.addFormGroup.value

    this.service.addProject(project).subscribe({
      next : (data) => {
        alert("project added successfully");
        this.addFormGroup.reset()
      },
      error : (err) => console.log(err)
    })

  }
}
