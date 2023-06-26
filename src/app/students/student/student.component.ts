import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
onEdit(_t62: any) {
throw new Error('Method not implemented.');
}
onDelete(_t62: any) {
throw new Error('Method not implemented.');
}
 
  message: string | undefined;
studentList: any;
deleteMessage: any;
  constructor(public service: StudentService, private fireStore: AngularFirestore) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: " ",
      fullName: '',
      branchName: '',
      level: '',
      cost: ''
    }
  }
 
  onSubmit(form: NgForm) {
    // Reset the message value.
    this.message = '';
 
    // Making the copy of the form and assigning it to the studentData.
    let courseData = Object.assign({}, form.value);
 
    // To avoid messing up the document id and just update the other details of the student. We will remove the 'property' from the student data.
    delete courseData.id;
 
    // Does the insert operation.
    if (form.value.id == null) {
      this.fireStore.collection('students').add(courseData);
      this.message = courseData.fullName + ' information is successfully saved!';
    } else {
      // Does the update operation for the selected student.
      // The 'studentData' object has the updated details of the student.
      this.fireStore.doc('students/' + form.value.id).update(courseData);
      this.message = 'Course successfully updated!';
    }
 
    // Reset the form if the operation is successful.
    this.resetForm(form);
  }
}