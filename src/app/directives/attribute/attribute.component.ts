import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  title = 'Attribute Directives';
  isBgDanger = true;
  isTextWhite = true;
  constructor() { }

  ngOnInit(): void {
  }

}
