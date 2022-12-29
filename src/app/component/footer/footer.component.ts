import { Component, OnInit } from '@angular/core';

declare const getDate: any

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //Array
  pagesArr: any = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Service', link: '/service' },
  ]

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


  social_links: any = [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.linkedin.com/",
    "https://twitter.com/",
    "https://wa.me/00000"
  ]

  //Variable
  year: any

  ngOnInit(): void {
    this.year = getDate('yyyy')
  }

}
