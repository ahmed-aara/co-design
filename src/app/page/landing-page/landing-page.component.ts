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
      description: `We are a fully design fit-out design firm that has
      developed over years into a powerhouse mastering all facets of interior
      decoration and fit-out services, Headquartered in Dubai UAE.`
    },
    {
      icon: 'assets/img/vector/awward.svg',
      title: 'Best Designs',
      description: `Getting the design and build of your environment right helps clients
      understand your business, captures your brand values and connects
      your team.`
    },
    {
      icon: 'assets/img/vector/wallet.svg',
      title: 'REASONABLE PRICE',
      description: `Our firm is built with integrity, pride of accomplishment and commitment to
      providing quality construction services at competitive cost.`
    },
    {
      icon: 'assets/img/vector/chat.svg',
      title: 'Free Consultation',
      description: `Our team is made up of certified and experienced interior designers, excited to help you go from inspiration to creation.`
    },
    {
      icon: 'assets/img/vector/call.svg',
      title: '24 / 7 Support',
      description: `Our team is ready to assist from the initial conceptual design to the
      turnkey handover, bringing high quality services and delivering the
      highest standards for all our clients, every time.`
    },
    {
      icon: 'assets/img/vector/recycle.svg',
      title: 'Guaranteed Works',
      description: `From the beginning we have focused our efforts on delivering the
      highest level of service and quality workmanship through our team of
      dedicated Project Managers and Site Operatives.`
    },
  ]

  aboutArr: any = [
    {
      title: 'Office Design',
      description: 'When we design offices for businesses and companies.. This means that we design the company\'s interface for receiving customers, and it must be with the highest levels of professionalism required globally'
    },
    {
      title: 'Residential Design',
      description: 'Tranquility.. luxury.. relaxation..It is the method we adopt in designing homes and residential complexes. Your family is the most important thing to you.. so we must take care of what matters to you as well.'
    },
    {
      title: 'Commercial Design',
      description: 'Attracting customers is what matters to the owners of companies and shops. We always think with you about everything that matters to your business, so we choose the appropriate design for you in an elaborate and professional manner.. We also care about the professionalism of implementation and maintenance.'
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
