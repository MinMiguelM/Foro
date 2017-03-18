import { Component } from '@angular/core';
import { AuthService } from  './service/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  styleUrls:['style/app.component.css']
})
export class AppComponent {
  loggedIn: boolean=false;

  constructor(
    private service: AuthService
  ){
    this.service.isLoggedIn().subscribe(
      logged => this.loggedIn = logged
    );
  }
}