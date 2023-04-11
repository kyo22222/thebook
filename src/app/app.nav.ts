import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './app.nav.html',
  styleUrls: ['./hamburgers.css']
})

export class nav_compo{
  @Input()
  //myName!: string;
  resume_tog!:boolean;
  isActive : boolean = false;
  
  toggleAct(){
    this.isActive = !this.isActive;
  }
  toggleRESU(){
    this.resume_tog = !this.resume_tog;//toggle
    this.togAct.emit(this.resume_tog);
  }
  toggleRESU_false(){
    this.resume_tog = false;
    this.togAct.emit(this.resume_tog);
  }

  //output
  @Output() togAct = new EventEmitter(); 
  constructor() { }
  ngOnInit() {}

}