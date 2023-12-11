enum Priority {
  HIGH,
  MEDIUM,
  LOW
}

export interface ProjectModel {
  id : string
  title : string;
  description : string;
  priority : Priority;
  createdAt : string;
  order : number;
}
