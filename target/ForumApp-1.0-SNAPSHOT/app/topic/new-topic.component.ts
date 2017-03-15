import {Component} from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'new-topic',
    templateUrl: '../html/new-topic.component.html',
    styleUrls:['../style/new-topic.component.css']
})
export class NewTopicComponent {
    inputForm:FormGroup;

    constructor(
        private location: Location,
        private formBuilder: FormBuilder
    ){
        this.inputForm = this.formBuilder.group({
            topicName: new FormControl('',Validators.required),
            topicContent: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(300)]))
        });
    }

    create(){

    }

    cancel():void{
        this.location.back();
    }
}