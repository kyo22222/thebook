import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './app.nav.html',
  styleUrls: ['./hamburgers.css']
})

export class nav_compo{
    isActive : boolean = false;
    showRESU : boolean = false;

    toggleAct(){
      this.isActive = !this.isActive;
      //console.log(this.isActive);
    }
    toggleRESU(){
      this.showRESU = !this.showRESU;
      this.togAct.emit(this.showRESU);
    }

    //output
    @Output() togAct = new EventEmitter(); 
    constructor() { }
    ngOnInit() {
    }

}