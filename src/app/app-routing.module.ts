//import this module for page change
//import component(pages)
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages or component
import { pageone_compo } from './app.pageone';
import { experience_compo } from './app.pagetwo';


//set path
const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full'},//index
  { path: '', component: pageone_compo},
  { path: 'portfolio', component: experience_compo}
  //{ path: 'karina', component: component_karina}

  //{ path: '', redirectTo: '/ae86', pathMatch: 'full'},
  //{ path: 'ae86', component: component_86},
  //{ path: 'karina', component: component_karina}

  // { path: 'heroes', component: HeroesComponent }
];

//no edit
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule{
}
