import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'forums',
    templateUrl: 'html/forums.component.html',
    styleUrls:['style/forums.component.css']
})
export class ForumsComponent {
    forums:Array<string> = ['Forum1','Forum2','Forum3','Forum4','Forum5'];

    addForum(label: string):void{
        this.forums.push(label);
    }
}