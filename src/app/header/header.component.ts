import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItem:number = 0;
  src = 'assets/ulogo.png';
  date=new Date();
  constructor() { }

  ngOnInit(): void {
    
    }
  }


