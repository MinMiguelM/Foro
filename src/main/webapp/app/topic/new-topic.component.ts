import {Component} from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {NewTopicService} from '../service/new-topic.service';
import {Topic} from '../model/topic.model';
import {Forum} from '../model/forum.model';
import {User} from '../model/user.model';
import {Role} from '../model/role.model';
import {Router} from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'new_topic',
    templateUrl: '../html/new-topic.component.html',
    styleUrls:['../style/new-topic.component.css']
})
export class NewTopicComponent {
    inputForm:FormGroup;
    topicName:" ";
    topicContent:" ";
    user:User;   
    forum:Forum;

    constructor(
        private location: Location,
        private formBuilder: FormBuilder,
        private service: NewTopicService,
        private route: Router,
        private activatedRoute: ActivatedRoute
    ){
        console.log(" en new ForumID:",activatedRoute.url.value[1].path);
        let user = localStorage.getItem('USER');
        this.user = JSON.parse(user);
        console.log(" id del usuario es ",this.user.id);
        let forum =  localStorage.getItem('CUR_FORUM');
        this.forum = JSON.parse(forum);
        console.log(" id del foro es ", this.forum.id);

        this.inputForm = this.formBuilder.group({
            topicName: new FormControl('',Validators.required),
            topicContent: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(300)]))
        });
    }

    create(){
        console.log(this.topicName);
        console.log(this.topicContent);
        let topic = new Topic(undefined,this.topicName,new Date(),this.topicContent,0,this.activatedRoute.url.value[1].path,this.user.id,this.user.username,false);
        this.service.addTopic(topic)
            .subscribe(
                success => {
                    console.log('exito');
                    this.location.back();
                },
                error => console.log(error)
            );
    }

    cancel():void{
        this.location.back();
    }
}