import { Component,Input } from '@angular/core';
import { Topic } from '../model/topic.model';
import { Forum } from '../model/forum.model';
import { TopicService } from '../service/topic.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

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
    
    constructor(
        private service:TopicService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ){
        this.id = this.activatedRoute.url.value[1].path;
        this.forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
        this.getTopics();
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

    disapprove(topic: Topic){
        this.service.remove(topic.id)
            .subscribe(
                success => this.getTopics(),
                error => console.log(error)
            );
    }

    goBack(): void{
        this.location.back();
    }
}
