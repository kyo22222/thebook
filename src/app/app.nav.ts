import { Component, Input} from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './app.nav.html',
  styleUrls: ['./hamburgers.css']
})

export class nav_compo{
    isActive : boolean = false;
}