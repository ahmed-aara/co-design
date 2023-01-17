import { Component } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class ContactComponent {

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
      value: "Business Bay - Dubai - United Arab Emirates"
    },
    {
      type: "email",
      value: "main@agcodesign.ae"
    }
  ]

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

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

}
