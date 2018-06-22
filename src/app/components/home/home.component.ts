import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<any> = [];
  constructor() {
    this.items = [
      {
        name: 'assets/img/Banner/banner.jpg',
        text: 'text1'
      },
      {
        name: 'assets/img/Banner/banner.jpg',
        text: 'text2'
      },
      {
        name: 'assets/img/Banner/banner.jpg',
        text: 'text3'
      },
    ];
  }
  ngOnInit() {
  }
}

