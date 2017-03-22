import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Router} from '@angular/router';

import { TopicService } from '../service/topic.service';
import { Topic } from '../model/topic.model';

@Component({
    moduleId: module.id,
    selector: 'topic',
    templateUrl: '../html/topic.component.html',
    styleUrls:['../style/topic.component.css']
})
export class TopicComponent implements OnInit{
    topics: Array<Topic> = [];
    message: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location, 
        private router: Router,
        private topicService: TopicService
    ) {
    
        console.log("routes");
        console.log(activatedRoute); // array of states
        console.log("ForumID:", activatedRoute.url.value[1].path);
        this.topicService.getTopics(activatedRoute.url.value[1].path)
            .subscribe(
                topics => {
                    this.topics = topics;
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
    }

    ngOnInit(): void {
        // get topics of a forum with id {id} at params of route
    }

    addTopic():void{
        this.router.navigate(['/forum',this.activatedRoute.url.value[1].path,'new']);
    }

    goBack(): void{
        this.location.back();
    }

}