import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Comment } from '../model/comment.model';
import { Topic } from '../model/topic.model';
import {CommentService} from '../service/comment.service';
import {TopicService} from '../service/topic.service';

@Component({
    moduleId: module.id,
    selector: 'comment-list',
    templateUrl: '../html/comment.component.html',
    styleUrls:['../style/detail-topic.component.css']
})
export class CommentComponent implements OnInit{
    allowedUser: boolean = false;
    message: string;
    @Input()
    comment: Comment;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private commentService: CommentService,
        private topicService: TopicService
    ) {
        //this.comment = comment;
    }
    
    ngOnInit(): void {
        console.log("CommentComponent onInit called: ", this.comment);
    }
    
    
    
}