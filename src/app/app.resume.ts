import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'resume',
  templateUrl: './app.resume.html',
  styleUrls: ['./hamburgers.css']
})

export class resume_compo{
  toggleRESU(){
    this.resume_tog = !this.resume_tog;//toggle
    this.togAct.emit(this.resume_tog);
  }

  //output
  @Output() togAct = new EventEmitter(); 
  constructor() { }
  ngOnInit() {}

  @Input()
  //myName!: string;
  resume_tog!:boolean;
}