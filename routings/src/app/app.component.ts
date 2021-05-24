import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routings';
  sideBarState : boolean = true;

  changeState() : any {
    this.sideBarState = !this.sideBarState;
  }
}
