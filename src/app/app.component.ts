import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'level-up';
  showHeader: boolean = true;

  constructor(private Location: Location) {
    // console.log(this.Location.path());
    if (this.Location.path() === '') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}
