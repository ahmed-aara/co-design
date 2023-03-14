import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';
import { MailService } from 'src/app/service/mail.service';

declare const UIkit: any

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  contactArr: any = [
    {
      type: "phone",
      value: "+971569110002"
    },
    {
      type: "time",
      value: "Mon-Sat: 08:00AM - 05:00PM"
    },
    {
      type: "location",
      value: "Business Bay - Dubai - Emirates"
    },
    {
      type: "email",
      value: "main@agcodesign.ae"
    }
  ]

  dataEmail: any = {
    type: 'mail',
    name: null,
    user_mail: null,
    phone: null,
    message: null,
  }

  loading: any = true;

  markers: any = [
    {
      position: {
        lat: 25.1876441,
        lng: 55.2661582
      }
    }
  ];

  zoom: number = 10;

  center: google.maps.LatLngLiteral = {
    lat: 25.1876441,
    lng: 55.2661582
  };

  constructor(private email: MailService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

  send() {
    this.notification('loading...')
    this.email.sendMail(this.dataEmail).subscribe(
      response => {
        this.clear()
        this.notification(response.message)
      }
    )
  }

  clear() {
    this.dataEmail = {
      type: 'mail',
      name: null,
      user_mail: null,
      phone: null,
      message: null,
    }

  }

  notification(message: any) {
    UIkit.notification({
      message: '<div class="full_left_"><h5 class="m-0 pl-2 whiteC_ f_Medium">' + message + '</h5></div>',
      pos: 'bottom-right',
      timeout: 4000
    });
  }
}
