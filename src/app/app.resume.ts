import { Component, Input} from '@angular/core';

@Component({
  selector: 'resume',
  templateUrl: './app.resume.html',
  styleUrls: ['./hamburgers.css']
})

export class resume_compo{

  @Input()
  //myName!: string;
  resume_tog!:boolean;
}