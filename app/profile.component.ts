import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'html/profile.component.html',
  styleUrls: ['style/profile.component.css']
})
export class ProfileComponent{
    nombre: string = "probando";
}