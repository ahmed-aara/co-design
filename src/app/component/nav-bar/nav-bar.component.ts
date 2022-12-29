import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

declare const UIkit: any

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  option: any = true;

  pagesArr: any = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Work', link: '/work' },
    { name: 'Service', link: '/service' },
  ]

  constructor(
    private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
        let currentUrlPath = event.url.slice(1).split(urlDelimitators)[0];

        var route = ['']
        for (var i = 0; i <= route.length; i++) {
          if (route[i] != currentUrlPath) {
            this.option = true
          } else {
            this.option = false
            break
          }
        }

      }
    });
  }

  closeOffcanvas(name: any) {
    UIkit.offcanvas(`#${name}`).hide();
  }

}
