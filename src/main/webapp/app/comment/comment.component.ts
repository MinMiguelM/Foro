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

    date:string;
    forum:Forum;
    editable:boolean=false;
    owner:boolean=false;
    
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
        let d= new Date(this.comment.date);
        this.date = d.toLocaleDateString() + ' ' +d.toLocaleTimeString();

        //moderation
        this.forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
        let user = JSON.parse(localStorage.getItem('USER'));
        this.moderate = this.forum.moderate;
        if(user.role.id == 1)
          this.editable = true;
        else{
          for(let i = 0;i < this.forum.usersList.length;i++){
            if(user.id == this.forum.usersList[i].id){
              this.editable = true;
              break;
            }
          }
        }

        if(this.editable || this.comment && this.comment.idUser.id == user.id){
          this.owner = true;
        }
    }

    remove(){
        this.commentService.remove(this.comment.id).subscribe(
            success => window.location.reload(),
            error => console.log(error)
        )
    }
    
    enableReply(){
        this.detail.enableComment(this.comment);
    }
    
}