import { Component,Input } from '@angular/core';
import { Topic } from '../model/topic.model';
import { Forum } from '../model/forum.model';
import { TopicService } from '../service/topic.service';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { User } from '../model/user.model';
import { ForumService } from '../service/forum.service';

@Component({
  moduleId: module.id,
  selector: 'edit-forum',
  templateUrl: '../html/edit-forum.component.html',
  styleUrls:['../style/edit-forum.component.css']
})
export class EditForumComponent{
    topics:Array<Topic>;
    id:number
    forum:Forum;

    modNew:string;

    usersList: Array<User>;
    moderators:Array<User>;
    
    constructor(
        private service:TopicService,
        private userService:UserService,
        private forumService:ForumService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ){
        this.id = this.activatedRoute.url.value[1].path;
        this.forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
        this.getTopics();
        this.moderators = this.forum.usersList;
    }

    getTopics(){
        if(this.forum.moderate){
            this.service.getUnapprovedTopics(this.id)
                .subscribe(
                    topics => this.topics = topics,
                    error => console.log(error)
                );
        }
    }

    approve(topic: Topic){
        topic.approved = true;
        this.service.edit(topic)
            .subscribe(
                success => this.getTopics(),
                error => console.log(error)
            );
    }

    lookFor(){
        this.userService.findByUsername(this.modNew)
            .subscribe(
                users => this.usersList = users,
                error => console.log(error)
            );
    }

    disapprove(topic: Topic){
        this.service.remove(topic.id)
            .subscribe(
                success => this.getTopics(),
                error => console.log(error)
            );
    }

    contain(id: number): boolean{
        if(!this.forum.usersList){
            return false;
        }
        for(let i = 0 ; i < this.forum.usersList.length;i++){
            if(this.forum.usersList[i] && this.forum.usersList[i].id == id){
                return true;
            }
        }
        return false;
    }

    addMod(user: User){
        if(this.forum.moderate){
            if(!this.contain(user.id)){
                if(!this.forum.usersList)
                    this.forum.usersList = new Array<User>();
                this.forum.usersList.push(user);
                this.forumService.edit(this.forum)
                    .subscribe(
                        success => {
                            this.moderators = this.forum.usersList
                            localStorage.setItem('CUR_FORUM',JSON.stringify(this.forum));
                        },
                        error => console.log(error)
                    );
            }
        }
    }

    goBack(): void{
        this.location.back();
    }
}
