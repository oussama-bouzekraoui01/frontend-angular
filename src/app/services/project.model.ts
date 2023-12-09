enum Priority {
  HIGH,
  MEDIUM,
  LOW
}

export interface ProjectModel {
  id : number
  title : string;
  description : string;
  priority : Priority;
}
