import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

  serviceArr: any = [
    {
      title: 'Steel Structural',
      description: `Steel construction works are among the most important things we offer within our projects to achieve project integration from our one company licensed in Dubai Municipality and Dubai Real Estate Development Authority
      It is also our steel construction works under the supervision of civil engineers specialized in the steel department
      This is what guarantees us the success of any project`
    },
    {
      title: 'Building Contracting',
      description: `We are a building contracting company specialized in all construction and interior design works.
      We have a work team with important competencies and work experience
      In addition to the existence of a license for all our business and important projects in Dubai and Abu Dhabi under the name of our company`
    },
    {
      title: 'Consulting',
      description: `To ensure the success of any project financially and operationally, there must be consulting engineers with experience and competencies who are licensed by Dubai Municipality as consulting engineers.
      Our company is fully integrated in terms of team, competencies and expertise, so we guarantee to provide our best for the success of any project.`
    },
    {
      title: 'MEP',
      description: `services are essential to the construction of the building.
      Therefore, we care about all our departments and our cadres of engineers and experts in order to provide our best for the success of any project.
      Mechanical, electrical, and plumbing services are critical components of the construction supply chain.`
    }
  ]

  ngOnInit() {
  }

}
