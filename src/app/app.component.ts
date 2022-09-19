import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dino';

  //receiver from child
  resu_onoff:boolean = false;
  emittedDataByChild(data:boolean) {
    this.resu_onoff = data;
  }

}
