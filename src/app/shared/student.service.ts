import { Injectable } from '@angular/core';
 
import { Course } from './student.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
 
@Injectable({
  providedIn: 'root'
})
 
export class StudentService {
 
  constructor(private fireStore: AngularFirestore) { }
 
  // Student form data.
  formData: Course = new Course;
 
  // Fetch all students information.
  getAllStudents() {
    // valueChanges() function returns the observable containing the student details expect the id of the document.
    // snapshotChanges() function returns the observable containing the student details and the id of the document (i.e. the metadata).
    return this.fireStore.collection('students').snapshotChanges();
 
    // We will use the id in order to perform the update or delete operation.
  }
}