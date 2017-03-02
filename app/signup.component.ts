import {Component} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'html/signup.component.html',
    styleUrls:['style/signup.component.css']
})
export class SignupComponent{
    inputForm: FormGroup;

    constructor(private formBuilder: FormBuilder){

        this.inputForm = this.formBuilder.group({
            username: new FormControl('',Validators.required),
            password: new FormControl('',Validators.required),
            rPassword: new FormControl('',Validators.required)
        });
    }

}