import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Comment } from '../model/comment.model';
import { Topic } from '../model/topic.model';
import {CommentService} from '../service/comment.service';
import {TopicService} from '../service/topic.service';

@Component({
    moduleId: module.id,
    selector: 'detail-topic',
    templateUrl: '../html/detail-topic.component.html',
    styleUrls:['../style/detail-topic.component.css']
})
export class DetailTopicComponent implements OnInit{
    allowedUser: boolean = false;
    //userId=1;
    message: string;
    topic: Topic = {};
    comments: Array<Comment> = [];
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private commentService: CommentService,
        private topicService: TopicService
    ) { }

    
    ngOnInit(): void {
        this.topicService.getTopic(this.activatedRoute.url.value[1].path)
            .subscribe(
                topic => {
                    this.topic = topic;
                    console.log("Received topic info: ", this.topic);
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
        this.commentService.getComments(this.activatedRoute.url.value[1].path)
            .subscribe(
                comments => {
                    this.comments = comments;
                    console.log(comments);
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
    }
    
    goBack(): void{
        this.location.back();
    }
    
}