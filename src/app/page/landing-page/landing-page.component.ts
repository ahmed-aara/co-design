import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  serviceArr: any = [
    {
      icon: 'assets/img/vector/paint.svg',
      title: 'Interior Expertise',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when.'
    },
    {
      icon: 'assets/img/vector/awward.svg',
      title: 'Best Designs',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when.'
    },
    {
      icon: 'assets/img/vector/wallet.svg',
      title: 'REASONABLE PRICE',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when.'
    },
    {
      icon: 'assets/img/vector/chat.svg',
      title: 'Free Consultation',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when.'
    },
    {
      icon: 'assets/img/vector/call.svg',
      title: '24 / 7 Support',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when.'
    },
    {
      icon: 'assets/img/vector/recycle.svg',
      title: 'Guaranteed Works',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when.'
    },
  ]

  placeArr: any = [
    { name: 'Our Office', value: 'office' },
    { name: 'Mandi Man', value: 'mandi-man' },
    { name: 'Jabal Ali Kaysar', value: 'jabal-ali-kaysar' },
    { name: 'Fadi Al Barsha', value: 'fadi-barsha' },
    { name: 'Animal Care', value: 'animal-care' },
  ]

  workArr: any = []

  ngOnInit(): void {
    for (let x = 1; x <= 3; x++) this.workArr.push({ img: `${x}.jpg`, value: 'office' })
    for (let x = 1; x <= 3; x++) this.workArr.push({ img: `${x}.jpg`, value: 'mandi-man' })
    for (let x = 1; x <= 6; x++) this.workArr.push({ img: `${x}.jpg`, value: 'jabal-ali-kaysar' })
    for (let x = 1; x <= 3; x++) this.workArr.push({ img: `${x}.jpg`, value: 'fadi-barsha' })
    for (let x = 1; x <= 5; x++) this.workArr.push({ img: `${x}.jpg`, value: 'animal-care' })
  }

}
