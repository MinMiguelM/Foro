import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'forum',
    templateUrl: '../html/forum.component.html',
    styleUrls:['../style/forum.component.css']
})
export class ForumComponent {
    forums:Array<string> = ['Forum1','Forum2','Forum3','Forum4','Forum5'];

    constructor(
        private router: Router
    ){}

    addForum():void{
        this.router.navigate(['/new_forum']);
    }
}