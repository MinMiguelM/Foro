import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Comment } from '../model/comment.model';
import { Topic } from '../model/topic.model';
import { Forum } from '../model/forum.model';
import { User } from '../model/user.model';
import {CommentService} from '../service/comment.service';
import {TopicService} from '../service/topic.service';
import {UserService} from '../service/user.service';
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

    user:User;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private commentService: CommentService,
        private topicService: TopicService,
        private userService: UserService,
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
        this.user = JSON.parse(localStorage.getItem('USER'));
        this.moderate = this.forum.moderate;
        if(this.user.role.id == 1)
          this.editable = true;
        else{
          for(let i = 0;i < this.forum.usersList.length;i++){
            if(this.user.id == this.forum.usersList[i].id){
              this.editable = true;
              break;
            }
          }
        }

        if(this.editable || this.comment && this.comment.userId == this.user.id){
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

    edit(){
        this.detail.enableEdit(this.comment);
    }

    up (comment:Comment)
    {
        let exist = false;
        for(  let i = 0; i < this.user.commentList.length; i++)
        {
            //console.log("en usuario ahi : ", this.user.topicList[i].title);
            if(comment.id==this.user.commentList[i].id)
            {
                console.log("user already point this topic");
                exist = true;
            }
        }
        if(!exist)
        {
            console.log(" user didn´t point this");
            this.user.commentList.push(comment);
            this.userService.edit(this.user)
                .subscribe(
                success => {
                    console.log('SE AGREGO!');
                       localStorage.setItem('USER',JSON.stringify(this.user));
                       this.commentService.addPoints(comment)
                       .subscribe(
                    success => {
                        this.detail.refreshComments();
                    },
                    error => console.log(error));
                },
                error => console.log(error)
            );

        }
    }

    down (comment:Comment)
    {
        let exist = false;
        for(  let i = 0; i < this.user.commentList.length; i++)
        {
            //console.log("en usuario ahi : ", this.user.topicList[i].title);
            if(comment.id==this.user.commentList[i].id)
            {
                console.log("user already point this topic");
                exist = true;
            }
        }
        if(!exist)
        {
            console.log(" user didn´t point this");
            this.user.commentList.push(comment);
            this.userService.edit(this.user)
                .subscribe(
                success => {
                    console.log('SE AGREGO!');
                       localStorage.setItem('USER',JSON.stringify(this.user));
                       this.commentService.removePoints(comment)
                       .subscribe(
                    success => {
                        this.detail.refreshComments();
                    },
                    error => console.log(error));
                },
                error => console.log(error)
            );

        }
    }
    
}