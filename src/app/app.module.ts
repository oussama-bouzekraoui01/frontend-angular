import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProjectService} from "./services/project.service";
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ViewComponent } from './view/view.component';


const appRoutes: Routes = [
  {path : "projects/view/:id", component : ViewComponent},
  {path : "projects", component: ListProjectsComponent},
  {path: "projects/edit/:id", component: EditComponent},
  {path : "projects/add", component: AddComponent},
  {path : "projects/editProject/:id", component: EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    ListProjectsComponent,
    ViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
