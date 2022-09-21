//import this module for page change
//import component(pages)
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages or component
import { pageone_compo } from './app.pageone';
import { experience_compo } from './app.pagetwo';

//set path
const routes: Routes = [
  { path: '', component: pageone_compo},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'portfolio', component: experience_compo}
];

//no edit
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule{
}
