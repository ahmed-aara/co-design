import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})

export class OurWorkComponent implements OnInit {

  placeArr: any = [
    { name: 'Al Banoosh', value: 'banoosh' },
    { name: 'Our Office', value: 'office' },
    { name: 'Mandi Man', value: 'mandi-man' },
    { name: 'Launch time', value: 'launch-time' },
    { name: 'Jihome cafe', value: 'jihome-cafe' },
    { name: 'Jabal Ali Kaysar', value: 'jabal-ali-kaysar' },
    { name: 'Jabal Ali', value: 'jabal-ali' },
    { name: 'Fadi Al Barsha', value: 'fadi-barsha' },
    { name: 'Clinic Dubai JLT', value: 'clinic-dubai-jlt' },
    { name: 'Doors', value: 'doors' },
    { name: 'Donner Kebab', value: 'donner-kebab' },
    { name: 'Doner & Gyros', value: 'doner-gyros' },
    { name: 'Dandanah cafe', value: 'dandanah-cafe' },
    { name: 'Chineese Res', value: 'chineese-restaurant' },
    { name: 'Bosnian village', value: 'bosnian-village' },
    { name: 'Blenz cafe', value: 'blenz-cafe' },
    { name: 'Animal Care', value: 'animal-care' },
  ]
  workArr: any = []

  constructor() { }

  ngOnInit(): void {
    for (let x = 1; x <= 20; x++) this.workArr.push({ img: `${x}.jpg`, value: 'banoosh' })
    for (let x = 1; x <= 10; x++) this.workArr.push({ img: `${x}.jpg`, value: 'office' })
    for (let x = 1; x <= 15; x++) this.workArr.push({ img: `${x}.jpg`, value: 'mandi-man' })
    for (let x = 1; x <= 9; x++) this.workArr.push({ img: `${x}.jpg`, value: 'launch-time' })
    for (let x = 1; x <= 7; x++) this.workArr.push({ img: `${x}.jpg`, value: 'jihome-cafe' })
    for (let x = 1; x <= 12; x++) this.workArr.push({ img: `${x}.jpg`, value: 'jabal-ali-kaysar' })
    for (let x = 1; x <= 11; x++) this.workArr.push({ img: `${x}.jpg`, value: 'jabal-ali' })
    for (let x = 1; x <= 9; x++) this.workArr.push({ img: `${x}.jpg`, value: 'fadi-barsha' })
    for (let x = 1; x <= 10; x++) this.workArr.push({ img: `${x}.jpg`, value: 'clinic-dubai-jlt' })
    for (let x = 1; x <= 4; x++) this.workArr.push({ img: `${x}.jpg`, value: 'doors' })
    for (let x = 1; x <= 6; x++) this.workArr.push({ img: `${x}.jpg`, value: 'donner-kebab' })
    for (let x = 1; x <= 11; x++) this.workArr.push({ img: `${x}.jpg`, value: 'doner-gyros' })
    for (let x = 1; x <= 7; x++) this.workArr.push({ img: `${x}.jpg`, value: 'dandanah-cafe' })
    for (let x = 1; x <= 4; x++) this.workArr.push({ img: `${x}.jpg`, value: 'chineese-restaurant' })
    for (let x = 1; x <= 24; x++) this.workArr.push({ img: `${x}.jpg`, value: 'bosnian-village' })
    for (let x = 1; x <= 4; x++) this.workArr.push({ img: `${x}.jpg`, value: 'blenz-cafe' })
    for (let x = 1; x <= 16; x++) this.workArr.push({ img: `${x}.jpg`, value: 'animal-care' })
  }

}
