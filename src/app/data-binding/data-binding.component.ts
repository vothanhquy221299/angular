import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title = 'Data Binding';
  fullName = 'Vo Thanh Quy';
  age = 18;
  isMarried = false;

  user = {
    username: 'quyv',
    email: 'quyv@gmail.com',
    role: true,
  }

  imgSrc = 'https://upload.wikimedia.org/wikipedia/vi/e/e0/Iron_Man_bleeding_edge.jpg'
  isDisabled = true;

  email="";
  clickMe() {
    alert('clicked!');
  }

  getEmail(event: any){
    // console.log(event.target.value);
    this.email = event.target.value;
    console.log(this.email);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
