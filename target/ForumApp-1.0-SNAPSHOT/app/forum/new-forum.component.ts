import {Component} from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'new-forum',
    templateUrl: '../html/new-forum.component.html',
    styleUrls:['../style/new-forum.component.css']
})
export class NewForumComponent {

    inputForm: FormGroup;

    constructor(
        private location: Location,
        private formBuilder: FormBuilder
    ){
        this.inputForm = this.formBuilder.group({
            forumName: new FormControl('',Validators.required)
        });
    }

    create(){

    }

    cancel():void{
        this.location.back();
    }
}