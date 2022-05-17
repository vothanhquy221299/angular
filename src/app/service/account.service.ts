import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  listAccount = [
    {
      "taiKhoan": "123@admin",
      "hoTen": "admin hoang anh",
      "email": "chaossasxzssc@gmail.com",
      "soDt": "0969010621",
      "matKhau": "123456",
      "maLoaiNguoiDung": "KhachHang"
    },
    {
      "taiKhoan": "1233211",
      "hoTen": "Dhndsnsa",
      "email": "Hdjsajdjda@gmail.com",
      "soDt": "1111111225",
      "matKhau": "1111111",
      "maLoaiNguoiDung": "KhachHang"
    },
    {
      "taiKhoan": "1234",
      "hoTen": "string",
      "email": "string@gmail.com",
      "soDt": "1111122116",
      "matKhau": "123456789",
      "maLoaiNguoiDung": "QuanTri"
    },
    {
      "taiKhoan": "1234a",
      "hoTen": "123a",
      "email": "1234a@gmail.com",
      "soDt": "4657893",
      "matKhau": "1234a345678",
      "maLoaiNguoiDung": "QuanTri"
    },
  ]
  constructor() { }
  addAccount(account: any){
    this.listAccount.push(account);
  }
}
