import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private  router: Router) {

  }
  Nav(a) {
    this.router.navigate(['/' + a + '']);
  }
  ToUp() {
    window.scrollTo(0, 0);
  }
}
