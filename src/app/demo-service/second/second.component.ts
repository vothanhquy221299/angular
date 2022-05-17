import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from 'src/app/service/alert-message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private alertMessageService: AlertMessageService) { }

  ngOnInit(): void {
  }

  sayHello(){
    this.alertMessageService.alertMessage("Nobody responses you!!!")
    // alert('Nobody responses you ;))')
  }
}
