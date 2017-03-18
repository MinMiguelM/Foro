import {Component} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from '../model/user.model';
import {Role} from '../model/role.model';

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: '../html/signup.component.html',
    styleUrls:['../style/signup.component.css']
})
export class SignupComponent{
    inputForm: FormGroup;
    errorMessage = '';
    username = '';
    password='';

    constructor(
        private formBuilder: FormBuilder,
        private service: UserService,
        private router: Router
    ){
        this.inputForm = this.formBuilder.group({
            username: new FormControl('',Validators.required),
            password: new FormControl('',Validators.compose([Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])),
            rPassword: new FormControl('',Validators.required)
        });
    }

    signUp(){
        let role = new Role(3,'USER');
        let user = new User(undefined,this.username,this.password,role);
        this.service.create(user)
            .subscribe(
                success => {
                    this.router.navigate(['/login']);
                },
                error => this.errorMessage = "Error"
            )
    }

}