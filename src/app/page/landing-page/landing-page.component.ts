import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

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

}
