import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('fullName') myFullName: string;
  @Input('age') myAge: number;
  @Input('account') myAccount: {
    username: string;
    email: string;
    role: boolean;
  }
  @Input('listAccount') myListAccount:
  {
    id: number,
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDt: string;
    matKhau: string;
    maLoaiNguoiDung: string;
}[];

  @Output('removeAccount') removeAccountEmitter = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.myFullName)
  }

  removeAccount(id: number){
    this.removeAccountEmitter.emit(id);
  }
}
