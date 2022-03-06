import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {

  title: string = 'Angular_Basics_Demo';

  images: {title: string, short: string, src: string}[] = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 1000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  // ngOnInit() {
  //   var carouselConfig = document.querySelector('carousel')! as any
  //   carouselConfig.carousel({
  //     interval: 2000,
  //     keyboard: true,
  //     pauseOnHover: true
  //   })
  // }
}
