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
  styleUrls: ['pageone.css', '../../node_modules/swiper/swiper-bundle.css'],
  encapsulation: ViewEncapsulation.None
})


export class experience_compo{
  //, '../../node_modules/swiper/swiper-bundle.css'
    config: SwiperOptions = {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: false,
        pagination: { clickable: false },
        scrollbar: { draggable: true },
     };
}