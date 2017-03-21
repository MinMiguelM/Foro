import {Component} from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Forum } from '../model/forum.model';
import {ForumService} from '../service/forum.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'new-forum',
    templateUrl: '../html/new-forum.component.html',
    styleUrls:['../style/new-forum.component.css']
})
export class NewForumComponent {
    forumName: string;
    moderate:string;
    inputForm: FormGroup;

    constructor(
        private location: Location,
        private formBuilder: FormBuilder,
        private service: ForumService,
        private router: Router
    ){
        this.inputForm = this.formBuilder.group({
            forumName: new FormControl('',Validators.required)
        });
    }

    create(){
        let mod :boolean = false;
        if(this.moderate=='moderate'){
            mod = true;
        }
        let forum: Forum = new Forum(undefined,this.forumName,mod);
        this.service.create(forum)
            .subscribe(
                success => this.router.navigate(['/forums']),
                error => console.log(error)
            );
    }

    cancel():void{
        this.location.back();
    }
}