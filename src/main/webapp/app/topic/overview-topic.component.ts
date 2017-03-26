import { Component,Input } from '@angular/core';
import { Forum } from '../model/forum.model';
import { Topic } from '../model/topic.model';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import {TopicService} from '../service/topic.service';

@Component({
  moduleId: module.id,
  selector: 'overview-topic',
  templateUrl: '../html/overview-topic.component.html',
  styleUrls:['../style/overview-forum.component.css']
})
export class OverviewTopicComponent{
    forum:Forum;
    editable:boolean;
    moderate:boolean = false;

    owner:boolean = false;
    
    constructor(
      private router:Router,
      private activatedRoute: ActivatedRoute,
      private topicService: TopicService
    ){ 
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

        let topic:Topic = JSON.parse(localStorage.getItem('CUR_TOPIC'));
        if(this.editable || topic && topic.userId == user.id){
          this.owner = true;
        }
     }

     edit(){
         let topic = JSON.parse(localStorage.getItem('CUR_TOPIC'));
         this.router.navigate(['/topic',topic.id,'edit']);
     }

     remove(){
       let topic:Topic = JSON.parse(localStorage.getItem('CUR_TOPIC'));
       let user = JSON.parse(localStorage.getItem('USER'));
       if(this.editable || topic.userId == user.id){
         this.topicService.remove(topic.id).subscribe(
           success=> this.router.navigate(['/forums']),
           error => console.log(error)
         );
       }
     }
}