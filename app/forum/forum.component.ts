import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'forum',
    templateUrl: '../html/forum.component.html',
    styleUrls:['../style/forum.component.css']
})
export class ForumComponent {
    forums:Array<string> = ['Forum1','Forum2','Forum3','Forum4','Forum5'];

    addForum(label: string):void{
        this.forums.push(label);
    }
}