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

    html: string = '';
    allowedUser: boolean = false;
    //userId=1;
    message: string;
    topic: Topic = {};
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private commentService: CommentService,
        private topicService: TopicService
    ) { }

    comments: Array<Comment> = [];
    
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
                    for (var i = 0; i < this.comments.length;i++) {
                        this.showComments(this.comments[i]);
                    }
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
    }
    
    goBack(): void{
        this.location.back();
    }
    
    commentHeader(comment): string {
        return `<span>
            por: ` + comment.idUser.username + ` &ensp;|&ensp; score: ` + comment.points + `
        </span>
        <h5>
            <a href="#">upvote</a>&ensp;|&ensp;<a href="#">downvote</a>&ensp;|&ensp;<a href="#">editar</a>&ensp;|&ensp;<a href="#">responder</a>&ensp;|&ensp;<a href="/ForumApp#/forums">eliminar</a>
        </h5>`
    }

    showComments(root: Comment){

        //this is the parent.
        this.html = this.html + `<div>`+ this.commentHeader(root) +`<p>`+root.content+`</p>`;
        for(var i=0;i<root.commentList.length;i++){
            this.showComments(root.commentList[i]);
        }
        this.html += `</div>`;
    }
    
}