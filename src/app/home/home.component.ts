import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  c1:string=''
  c2:string=''
  c3:string=''
  src1="assets/udemy2.png"
  src2="assets/udemy3.jpg"
  
 

  constructor() { }

  ngOnInit(): void {
  }

}
