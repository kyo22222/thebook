import { Component, ViewEncapsulation, ViewChild } from "@angular/core";

// import Swiper core and required modules
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Scrollbar, Swiper, Virtual } from 'swiper';
// install Swiper modules
SwiperCore.use([Virtual, Navigation, Scrollbar]);

@Component({
  selector: 'experience',
  templateUrl: './app.pagetwo.html',
  styleUrls: ['app.pagetwo.css', '../../node_modules/swiper/swiper-bundle.css'],
  encapsulation: ViewEncapsulation.None
})


export class experience_compo{
  //, '../../node_modules/swiper/swiper-bundle.css'
    config: SwiperOptions = {
        slidesPerView: 1.2,
        spaceBetween: 10,
        autoHeight: false,
        scrollbar: { draggable: true },
        breakpoints: {
          // 768: {
          //   slidesPerView: 3.3,
          // },
          1199: {
            slidesPerView: 2.5,
          }
        },
     };
}