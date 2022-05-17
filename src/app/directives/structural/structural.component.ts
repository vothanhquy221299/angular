import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {
  title = 'Structural Directives';

  isLoggedIn = false;
  userName = 'quyv';
  age = 0;
  rappers = ['Đen', 'Binz', 'Karik', 'Wowy'];
  selectedColor = 'black';


  login(){
    this.isLoggedIn = true;
  }
  logout(){
    this.isLoggedIn = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

  selectColor(color: string){
    this.selectedColor = color;
  }

}
