import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
studentList: any;
onEdit(_t13: any) {
throw new Error('Method not implemented.');
}
onDelete(_t13: any) {
throw new Error('Method not implemented.');
}
deleteMessage: any;

  constructor() { }

  ngOnInit(): void {
  }

}
