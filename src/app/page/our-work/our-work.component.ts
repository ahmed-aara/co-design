import { Component, OnInit } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

declare const UIkit: any

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
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss'],
  animations: [
    fadeIn,
    fadeOut
  ]
})

export class OurWorkComponent implements OnInit {

  placeArr: any = [
    { num_img: 4, name: 'Al Banoosh', value: 'banoosh', img: 'assets/img/work/banoosh/3.jpg', imgs: [] },
    { num_img: 4, name: 'Our Office', value: 'office', img: 'assets/img/work/office/3.jpg', imgs: [] },
    { num_img: 4, name: 'Mandi Man', value: 'mandi-man', img: 'assets/img/work/mandi-man/3.jpg', imgs: [] },
    { num_img: 3, name: 'Launch time', value: 'launch-time', img: 'assets/img/work/launch-time/3.jpg', imgs: [] },
    { num_img: 4, name: 'Jihome cafe', value: 'jihome-cafe', img: 'assets/img/work/jihome-cafe/3.jpg', imgs: [] },
    { num_img: 4, name: 'Jabal Ali Mall', value: 'jabal-ali-mall', img: 'assets/img/work/jabal-ali-mall/3.jpg', imgs: [] },
    { num_img: 3, name: 'Dr.K jlt', value: 'clinic-dubai-jlt', img: 'assets/img/work/clinic-dubai-jlt/3.jpg', imgs: [] },
    { num_img: 4, name: 'Doors', value: 'doors', img: 'assets/img/work/doors/3.jpg', imgs: [] },
    { num_img: 4, name: 'Donner Kebab', value: 'donner-kebab', img: 'assets/img/work/donner-kebab/3.jpg', imgs: [] },
    { num_img: 3, name: 'Doner & Gyros', value: 'doner-gyros', img: 'assets/img/work/doner-gyros/3.jpg', imgs: [] },
    { num_img: 4, name: 'Dandanah cafe', value: 'dandanah-cafe', img: 'assets/img/work/dandanah-cafe/3.jpg', imgs: [] },
    { num_img: 4, name: 'Chineese Res', value: 'chineese-restaurant', img: 'assets/img/work/chineese-restaurant/3.jpg', imgs: [] },
    { num_img: 3, name: 'Bosnian village', value: 'bosnian-village', img: 'assets/img/work/bosnian-village/3.jpg', imgs: [] },
    { num_img: 4, name: 'Blenz cafe', value: 'blenz-cafe', img: 'assets/img/work/blenz-cafe/3.jpg', imgs: [] },
    { num_img: 3, name: 'Animal Care', value: 'animal-care', img: 'assets/img/work/animal-care/3.jpg', imgs: [] },
    { num_img: 4, name: 'Hejoouzati', value: 'hejoouzati', img: 'assets/img/work/hejoouzati/3.jpg', imgs: [] },
  ]
  detailData:any = {}
  loading: any = true;

  constructor() { }

  ngOnInit(): void {
    for (let x = 1; x <= 20; x++) this.placeArr[0].imgs.push({ img: `${x}.jpg`, value: 'banoosh' })
    for (let x = 1; x <= 10; x++) this.placeArr[1].imgs.push({ img: `${x}.jpg`, value: 'office' })
    for (let x = 1; x <= 15; x++) this.placeArr[2].imgs.push({ img: `${x}.jpg`, value: 'mandi-man' })
    for (let x = 1; x <= 9; x++) this.placeArr[3].imgs.push({ img: `${x}.jpg`, value: 'launch-time' })
    for (let x = 1; x <= 7; x++) this.placeArr[4].imgs.push({ img: `${x}.jpg`, value: 'jihome-cafe' })
    for (let x = 1; x <= 23; x++) this.placeArr[5].imgs.push({ img: `${x}.jpg`, value: 'jabal-ali-mall' })
    for (let x = 1; x <= 10; x++) this.placeArr[6].imgs.push({ img: `${x}.jpg`, value: 'clinic-dubai-jlt' })
    for (let x = 1; x <= 63; x++) this.placeArr[7].imgs.push({ img: `${x}.jpg`, value: 'doors' })
    for (let x = 1; x <= 6; x++) this.placeArr[8].imgs.push({ img: `${x}.jpg`, value: 'donner-kebab' })
    for (let x = 1; x <= 11; x++) this.placeArr[9].imgs.push({ img: `${x}.jpg`, value: 'doner-gyros' })
    for (let x = 1; x <= 7; x++) this.placeArr[10].imgs.push({ img: `${x}.jpg`, value: 'dandanah-cafe' })
    for (let x = 1; x <= 4; x++) this.placeArr[11].imgs.push({ img: `${x}.jpg`, value: 'chineese-restaurant' })
    for (let x = 1; x <= 24; x++) this.placeArr[12].imgs.push({ img: `${x}.jpg`, value: 'bosnian-village' })
    for (let x = 1; x <= 4; x++) this.placeArr[13].imgs.push({ img: `${x}.jpg`, value: 'blenz-cafe' })
    for (let x = 1; x <= 16; x++) this.placeArr[14].imgs.push({ img: `${x}.jpg`, value: 'animal-care' })
    for (let x = 1; x <= 15; x++) this.placeArr[15].imgs.push({ img: `${x}.jpg`, value: 'hejoouzati' })


    setTimeout(() => {
      this.loading = false
    }, 2000);

  }

  getDetail(index: any) {
    this.detailData = this.placeArr[index]
    console.log(this.detailData)
  }

}
