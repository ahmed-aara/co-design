import { Component, OnInit } from '@angular/core';
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
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class OurServiceComponent implements OnInit {

  serviceArr: any = [
    {
      title: 'Steel Structural',
      description: `Steel construction works are among the most important things we offer within our projects to achieve project integration from our one company licensed in Dubai Municipality and Dubai Real Estate Development Authority
      It is also our steel construction works under the supervision of civil engineers specialized in the steel department
      This is what guarantees us the success of any project`,
      img: 'assets/img/service/steel-structural.jpg'
    },
    {
      title: 'Building Contracting',
      description: `We are a building contracting company specialized in all construction and interior design works.
      We have a work team with important competencies and work experience
      In addition to the existence of a license for all our business and important projects in Dubai and Abu Dhabi under the name of our company`,
      img: 'assets/img/service/building-contracting.jpg'
    },
    {
      title: 'Consulting',
      description: `To ensure the success of any project financially and operationally, there must be consulting engineers with experience and competencies who are licensed by Dubai Municipality as consulting engineers.
      Our company is fully integrated in terms of team, competencies and expertise, so we guarantee to provide our best for the success of any project.`,
      img: 'assets/img/service/consulting.jpg'
    },
    {
      title: 'MEP',
      description: `services are essential to the construction of the building.
      Therefore, we care about all our departments and our cadres of engineers and experts in order to provide our best for the success of any project.
      Mechanical, electrical, and plumbing services are critical components of the construction supply chain.`,
      img: 'assets/img/service/mep.jpg'
    }
  ]

  loading: any = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

  checkEven(index: any) {
    if (index % 2 === 0) return true
    else return false
  }

}
