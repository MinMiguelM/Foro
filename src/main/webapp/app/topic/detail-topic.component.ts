import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Comment } from '../model/comment.model';
import {CommentService} from '../service/comment.service';

@Component({
    moduleId: module.id,
    selector: 'detail-topic',
    templateUrl: '../html/detail-topic.component.html',
    styleUrls:['../style/detail-topic.component.css']
})
export class DetailTopicComponent implements OnInit{

    html: string = '';
    manage: string = `<span>
            por: Miguel &ensp;|&ensp; score: 354
        </span>
        <h5>
            <a href="#">upvote</a>&ensp;|&ensp;<a href="#">downvote</a>&ensp;|&ensp;<a href="#">editar</a>&ensp;|&ensp;<a href="#">responder</a>&ensp;|&ensp;<a href="/ForumApp#/forums">eliminar</a>
        </h5>`;
    allowedUser: boolean = false;
    //userId=1;
    message: string;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private commentService: CommentService
    ) { }

    comments: Array<Comment> = [];
    /*newcomment1 = new Comment(1,new Array<Comment>(),null,"Comentario viejo sobre pendejadas 1",30,1);
    newcomment2 = new Comment(2,new Array<Comment>(),this.newcomment1,"Comentario viejo sobre pendejadas 2",30,1);
    newcomment3 = new Comment(3,new Array<Comment>(),this.newcomment2,"Comentario viejo sobre pendejadas 3",30,1);
    newcomment4 = new Comment(4,new Array<Comment>(),this.newcomment2,"Comentario viejo sobre pendejadas 4",30,1);
    newcomment5 = new Comment(5,new Array<Comment>(),null,"Comentario viejo sobre pendejadas 5",30,2);*/
    ngOnInit(): void {
        /*this.newcomment1.appendChild(this.newcomment2);
        this.newcomment2.appendChild(this.newcomment3);
        this.newcomment2.appendChild(this.newcomment4);

        this.comments.push(this.newcomment1);
        this.comments.push(this.newcomment5);
        for(var i=0;i<this.comments.length;i++){
            this.showComments(this.comments[i]);
        }*/
        this.commentService.getComments(this.activatedRoute.url.value[1].path)
            .subscribe(
                comments => {
                    this.comments = comments;
                    console.log(comments);
                    /*for (var i = 0; i < this.comments.length;i++) {
                        this.showComments(this.comments[i]);
                    }*/
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
    }
    
    goBack(): void{
        this.location.back();
    }

    showComments(root: Comment){

        //this is the parent.
        this.html = this.html + `<div>`+this.manage+`<p>`+root.content+`</p>`;
        for(var i=0;i<root.commentList.length;i++){
            this.showComments(root.commentList[i]);
        }
        this.html += `</div>`;
    }
    
}