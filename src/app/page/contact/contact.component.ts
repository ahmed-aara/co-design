import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactArr: any = [
    {
      type: "phone",
      value: "00 00000000000"
    },
    {
      type: "time",
      value: "Mon-Sat: 011:00AM - 06:00PM"
    },
    {
      type: "location",
      value: "1234 Address - World - World"
    },
    {
      type: "email",
      value: "co@email.com"
    }
  ]

}
