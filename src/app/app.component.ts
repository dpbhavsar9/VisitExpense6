import { Component } from '@angular/core';
import { CookieService } from '../../node_modules/ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private _cookieService: CookieService) {
    this._cookieService.removeAll();
  }
}
