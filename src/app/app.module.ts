import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from "swiper/angular";

import { nav_compo } from './app.nav';
import { pageone_compo } from './app.pageone';
import { resume_compo } from './app.resume';
import { experience_compo } from './app.pagetwo';

@NgModule({
  declarations: [
    AppComponent,
    nav_compo,
    pageone_compo,
    resume_compo,
    experience_compo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //console = console.log("TO DO: resume(toggle class [name, lang, email, git link | edcu | expri | skill]), portfolio(route to another page), ng-particle(bg), new color scheme");
}
