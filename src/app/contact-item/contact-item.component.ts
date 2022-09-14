import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
})
export class ContactItemComponent implements OnInit {
  @Input()
  contact: any;

  constructor() {}

  ngOnInit() {}
}
