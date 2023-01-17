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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    fadeIn,
    fadeOut
  ]
})
export class AboutComponent implements OnInit {

  loading: any = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 2000);
  }

}
