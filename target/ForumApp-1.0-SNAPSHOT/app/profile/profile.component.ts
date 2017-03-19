import { Component } from '@angular/core';
import { User } from '../model/user.model';
import {AuthService} from'../service/auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: '../html/profile.component.html',
  styleUrls: ['../style/profile.component.css']
})
export class ProfileComponent{
    user: User;
    
    constructor(
        private service:AuthService,
        private router:Router
    ) {
        var user = localStorage.getItem('USER');
        this.user = JSON.parse(user);
        console.log("Logging this.user.username of type user:", this.user.username);
    }
    
    logout(){
        console.log('logout')
        this.service.logout()
            .subscribe(
                success => {
                    localStorage.removeItem('USER');
                    this.router.navigate(['/login']);
                },
                error => console.log('error ' + error)
            );
    }
}