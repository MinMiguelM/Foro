import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'topic',
    templateUrl: '../html/topic.component.html',
    styleUrls:['../style/topic.component.css']
})
export class TopicComponent implements OnInit{
    //forum

    constructor(
        private route: ActivatedRoute,
        private location: Location, 
        private router: Router
    ) {}

    ngOnInit(): void {
        // get topics of a forum with id {id} at params of route
    }

    topics:Array<string> = ['Topic1','Topic2','Topic3','Topic4','Topic5'];

    addTopic():void{
        this.router.navigate(['/new_topic']);
    }

    goBack(): void{
        this.location.back();
    }

}