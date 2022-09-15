import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { nav_compo } from './app.nav';
import { pageone_compo } from './app.pageone';

@NgModule({
  declarations: [
    AppComponent,
    nav_compo,
    pageone_compo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  console = console.log("TO DO: resume(toggle class), portfolio(route to another page), ng-particle(bg), new color scheme");
}
