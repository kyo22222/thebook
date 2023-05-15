import { Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

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

  ngOnChanges(resume_tog:any) {
    for (let propName in resume_tog) {
      let chng = resume_tog[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(cur, prev);
    }
  }

  //output
  @Output() togAct = new EventEmitter(); 
  constructor() { }
  ngOnInit() {
  }  

  @Input()
  //myName!: string;
  resume_tog!:boolean;
}