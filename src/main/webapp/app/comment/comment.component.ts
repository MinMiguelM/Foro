import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Comment } from '../model/comment.model';
import { Topic } from '../model/topic.model';
import { Forum } from '../model/forum.model';
import {CommentService} from '../service/comment.service';
import {TopicService} from '../service/topic.service';
import { DetailTopicComponent } from '../topic/detail-topic.component';

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
    moderate:boolean;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private commentService: CommentService,
        private topicService: TopicService,
        private detail:DetailTopicComponent
    ) {
        //this.comment = comment;
        let forum:Forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
        this.moderate = forum.moderate;
    }
    
    ngOnInit(): void {
        console.log("CommentComponent onInit called: ", this.comment);
    }
    
    enableReply(){
        this.detail.enableComment(this.comment);
    }
    
}