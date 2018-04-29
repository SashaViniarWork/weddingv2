import {Component, OnInit} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Array: any;
  carouselOne: NgxCarousel;

  constructor() {

  }

  myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }
  public imageSources: string[] = [
    '../../assets/img/main/1.jpg',
    '../../assets/img/main/2.jpg',
    '../../assets/img/main/3.jpg',
    '../../assets/img/main/4.jpg',
    '../../assets/img/main/5.jpg',
    '../../assets/img/main/6.jpg',
    '../../assets/img/main/2.jpg',
    '../../assets/img/main/1.jpg',
    '../../assets/img/main/9.jpg',
    '../../assets/img/main/10.jpg',
    '../../assets/img/main/11.jpg',
    '../../assets/img/main/12.jpg',
    '../../assets/img/main/13.jpg',
    '../../assets/img/main/14.jpg',
    '../../assets/img/main/15.jpg',
    '../../assets/img/main/16.jpg',
    '../../assets/img/main/17.jpg'
  ];

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: -10px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }

}
