import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Comment } from '../model/comment.model';
import { User } from '../model/user.model';
import { Topic } from '../model/topic.model';
import {CommentService} from '../service/comment.service';
import {TopicService} from '../service/topic.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'detail-topic',
    templateUrl: '../html/detail-topic.component.html',
    styleUrls:['../style/detail-topic.component.css']
})
export class DetailTopicComponent implements OnInit{
    allowedUser: boolean = false;
    user:User;
    message: string;
    topic: Topic = {};
    comments: Array<Comment> = [];
    inputForm:FormGroup;
    comment:string;
    reply: boolean = false;

    date: string;

    parent:Comment;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private commentService: CommentService,
        private topicService: TopicService,
        private formBuilder: FormBuilder
    ) {
        this.inputForm = this.formBuilder.group({
            comment: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(300)]))
        });
        this.user = JSON.parse(localStorage.getItem('USER'));
    }

    enableComment(parent:Comment){
        this.reply = true;
        this.parent = parent;
    }
    
    ngOnInit(): void {
        this.topicService.getTopic(this.activatedRoute.url.value[1].path)
            .subscribe(
                topic => {
                    this.topic = topic;
                    let d = new Date(this.topic.date);
                    this.date = d.toLocaleDateString()+' '+d.toLocaleTimeString();
                    console.log("Received topic info: ", this.topic);
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
        this.refreshComments();
    }
    
    goBack(): void{
        this.location.back();
    }

    refreshComments(){
        this.commentService.getComments(this.activatedRoute.url.value[1].path)
            .subscribe(
                comments => {
                    this.comments = comments;
                    console.log(comments);
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
    }

    creteReply(){
        let parentId = this.parent?this.parent.id:-1;
        let newComment: Comment = 
            new Comment(undefined,new Array<Comment>(),parentId,false,this.comment,0,
                this.user,this.topic,new Date());
        this.commentService.create(newComment).
            subscribe(
                success => {
                    this.reply = false;
                    this.refreshComments();
                },
                error => console.log(error)
            )
    }
    
}