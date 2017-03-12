import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'new-forum',
    templateUrl: '../html/new-forum.component.html',
    styleUrls:['../style/new-forum.component.css']
})
export class NewForumComponent {

    constructor(
        private location: Location
    ){}

    create(){

    }

    cancel():void{
        this.location.back();
    }
}