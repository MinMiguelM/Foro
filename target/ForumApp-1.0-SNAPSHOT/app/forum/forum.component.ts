import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ForumService} from '../service/forum.service';
import { Forum } from '../model/forum.model';
import {User} from '../model/user.model';

@Component({
    moduleId: module.id,
    selector: 'forum',
    templateUrl: '../html/forum.component.html',
    styleUrls:['../style/forum.component.css']
})
export class ForumComponent {
    //forums:Array<string> = ['Forum1','Forum2','Forum3','Forum4','Forum5'];
    forums:Array<Forum> = [];
    message: string;
    user:User;
    
    constructor(
        private router: Router,
        private forumService: ForumService
    ){
        let user = localStorage.getItem('USER');
        this.user = JSON.parse(user);

        this.forumService.getForums()
            .subscribe(
                forums => {
                    this.forums = forums;
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
    }

    addForum():void{
        this.router.navigate(['/new_forum']);
    }
}