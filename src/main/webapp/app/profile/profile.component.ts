import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: '../html/profile.component.html',
  styleUrls: ['../style/profile.component.css']
})
export class ProfileComponent{
    user: User;
    
    constructor() {
        var user = localStorage.getItem('USER');
        this.user = JSON.parse(user);
        console.log("Logging this.user.username of type user:", this.user.username);
    }
    
    logout(){
      
    }
}