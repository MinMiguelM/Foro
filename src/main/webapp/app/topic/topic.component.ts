import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {Router} from '@angular/router';

import { TopicService } from '../service/topic.service';
import { Topic } from '../model/topic.model';
import {User} from '../model/user.model';
import {UserService} from '../service/user.service';

@Component({
    moduleId: module.id,
    selector: 'topic',
    templateUrl: '../html/topic.component.html',
    styleUrls:['../style/topic.component.css']
})
export class TopicComponent implements OnInit{
    topics: Array<Topic> = [];
    message: string;
    user:User;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location, 
        private router: Router,
        private topicService: TopicService,
        private userService: UserService
    ) {
    
        console.log("routes");
        console.log(activatedRoute); // array of states
        console.log("ForumID:", activatedRoute.url.value[1].path);
        this.getTopics();
        let user = localStorage.getItem('USER');
        this.user = JSON.parse(user);
    }

    ngOnInit(): void {
        // get topics of a forum with id {id} at params of route
    }

    getTopics(){
        this.topicService.getTopics(this.activatedRoute.url.value[1].path)
            .subscribe(
                topics => {
                    this.topics = topics;
                },
                error => this.message = 'No tienes permisos para ver esta página'
            );
    }

    addTopic():void{
        this.router.navigate(['/forum',this.activatedRoute.url.value[1].path,'new']);
    }

    goTo(topic : Topic){
        localStorage.setItem('CUR_TOPIC',JSON.stringify(topic));
        this.router.navigate(['/topic', topic.id]);
    }

    goBack(): void{
        this.location.back();
    }

    down(topic:Topic){
        let exist = false;
        for(  let i = 0; i < this.user.topicList.length; i++)
        {
            //console.log("en usuario ahi : ", this.user.topicList[i].title);
            if(topic.id==this.user.topicList[i].id)
            {
                console.log("user already point this topic");
                exist = true;
            }
        }
        if(!exist)
        {
            console.log(" user didn´t point this");
            this.user.topicList.push(topic);
            this.userService.edit(this.user)
                .subscribe(
                success => {
                    console.log('SE AGREGO!');
                       localStorage.setItem('USER',JSON.stringify(this.user));
                       this.topicService.removePoints(topic)
                       .subscribe(
                    success => {
                        this.getTopics();
                    },
                    error => console.log(error));
                },
                error => console.log(error)
            );

        }
    }

    up (topic:Topic)
    {
        let exist = false;
        for(  let i = 0; i < this.user.topicList.length; i++)
        {
            //console.log("en usuario ahi : ", this.user.topicList[i].title);
            if(topic.id==this.user.topicList[i].id)
            {
                console.log("user already point this topic");
                exist = true;
            }
        }
        if(!exist)
        {
            console.log(" user didn´t point this");
            this.user.topicList.push(topic);
            this.userService.edit(this.user)
                .subscribe(
                success => {
                    console.log('SE AGREGO!');
                       localStorage.setItem('USER',JSON.stringify(this.user));
                       this.topicService.addPoints(topic)
                       .subscribe(
                    success => {
                        this.getTopics();
                    },
                    error => console.log(error));
                },
                error => console.log(error)
            );

        }
    }

}