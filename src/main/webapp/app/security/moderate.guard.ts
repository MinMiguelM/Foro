// Adapted from http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {User} from '../model/user.model';
import {Forum} from '../model/forum.model';
 
@Injectable()
export class ModerateGuard implements CanActivate {
 
    constructor(private router: Router) { }

    user: User;
    forum: Forum;
 
    canActivate() {
        if(localStorage.getItem('USER'))
        {
            let user = localStorage.getItem('USER');
            this.user = JSON.parse(user);
            if(this.user.role.name=='ADMIN'){
                return true;
            }
            this.forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
            if(this.forum && this.contain(this.user.id)){
                return true;
            }
            this.router.navigate(['/forums']);
        }
        return false;
        
    }

    contain(id: number): boolean{
        if(!this.forum.usersList){
            return false;
        }
        for(let i = 0 ; i < this.forum.usersList.length;i++){
            if(this.forum.usersList[i] && this.forum.usersList[i].id == id){
                return true;
            }
        }
        return false;
    }
}