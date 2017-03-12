import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'new-topic',
    templateUrl: '../html/new-topic.component.html',
    styleUrls:['../style/new-topic.component.css']
})
export class NewTopicComponent {

    constructor(
        private location: Location
    ){}

    create(){

    }

    cancel():void{
        this.location.back();
    }
}