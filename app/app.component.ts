import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  styleUrls:['style/app.component.css']
})
export class AppComponent {
  logged: boolean=false;
}