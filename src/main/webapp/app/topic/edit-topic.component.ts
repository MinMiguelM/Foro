import { Component,Input } from '@angular/core';
import { Forum } from '../model/forum.model';
import { Comment } from '../model/comment.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { CommentService } from '../service/comment.service';

@Component({
  moduleId: module.id,
  selector: 'edit-topic',
  templateUrl: '../html/edit-topic.component.html',
  styleUrls:['../style/edit-forum.component.css']
})
export class EditTopicComponent{
    comments: Array<Comment>;

    id:number
    forum:Forum;
    
    constructor(
        private commentService:CommentService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ){
        this.id = this.activatedRoute.url.value[1].path;
        this.forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
        this.getComments();
    }

    getComments(){
        if(this.forum.moderate){
            this.commentService.getUnapprovedComments(this.id)
                .subscribe(
                    comments => this.comments = comments,
                    error => console.log(error)
                )
        }
    }

    approve(comment: Comment){
        comment.approved = true;
        this.commentService.edit(comment)
            .subscribe(
                success => this.getComments(),
                error => console.log(error)
            );
    }

    disapprove(comment: Comment){
        this.commentService.remove(comment.id)
            .subscribe(
                success => this.getComments(),
                error => console.log(error)
            );
    }

    goBack(): void{
        this.location.back();
    }
}
