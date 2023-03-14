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

  social_links: any = [
    "https://www.facebook.com/",
    "https://www.instagram.com/agco.design/",
    "https://www.linkedin.com/company/agco-design/",
    "https://wa.me/+971569110002"
  ]

  //Variable
  year: any

  constructor() {
  }

  ngOnInit(): void {
    this.year = getDate('yyyy')
  }

}
