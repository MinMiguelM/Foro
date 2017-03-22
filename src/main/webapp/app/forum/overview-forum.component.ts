import { Component,Input } from '@angular/core';
import { Forum } from '../model/forum.model';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'overview-forum',
  templateUrl: '../html/overview-forum.component.html',
  styleUrls:['../style/overview-forum.component.css']
})
export class OverviewForumComponent{
    forum:Forum;
    editable:boolean;
    moderate:boolean = false;
    
    constructor(
      private router:Router
    ){ 
        this.forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
        let user: User = JSON.parse(localStorage.getItem('USER'));
        this.moderate = this.forum.moderate;
        if(user.role.id == 1)
          this.editable = true;
        else{
          for(let i = 0;i < this.forum.usersList.length;i++){
            if(user.id == this.forum.usersList[i].id){
              this.editable = true;
              break;
            }
          }
        }
     }

     edit(){
        this.router.navigate(['/forum',this.forum.id,'edit']);
     }
}