// Adapted from http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {User} from '../model/user.model';
 
@Injectable()
export class CreateForumGuard implements CanActivate {
 
    constructor(private router: Router) { }

    user: User;
 
    canActivate() {
        if(localStorage.getItem('USER'))
        {
            let user = localStorage.getItem('USER');
            this.user = JSON.parse(user);
            if(this.user.role.name=='ADMIN'){
                return true;
            }
            this.router.navigate(['/forums']);
        }
        return false;
        
    }
}