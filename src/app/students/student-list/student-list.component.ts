import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { Course } from 'src/app/shared/student.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
 
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  deleteMessage: string | undefined;
  courseList: Course[] = [];
  constructor(private service: StudentService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
    this.service.getAllStudents().subscribe(response => {
      this.courseList = response.map(document => {
        return {
          id: document.payload.doc.id,
          ...document.payload.doc.data() as {}    // Attention - Require typescript version >3 to work!!
        } as Course;
      })
 
      // Sorting the student-list in ascending order.
      this.courseList = this.courseList.sort((obj1, obj2) => (obj1 as any).rollNo - (obj2 as any).rollNo);
    });
  }
 
  onEdit(student: Course) {
    this.service.formData = Object.assign({}, student);
  }
 
  onDelete(student: Course) {
    this.fireStore.doc('students/' + student.id).delete();
    this.deleteMessage = student.fullName + ' information is successfully deleted!';
  }
}