import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: '../html/login.component.html',
    styleUrls:['../style/login.component.css']
})
export class LoginComponent {
    inputForm: FormGroup;
    
    constructor(
        private router: Router, 
        private app: AppComponent,
        private formBuilder: FormBuilder
    ) { 
        this.inputForm = this.formBuilder.group({
            username: new FormControl('',Validators.required),
            password: new FormControl('',Validators.required)
        });
    }

    logIn(): void{
        this.app.logged = true;
        this.router.navigate(['/forums']);
    }

    signUp(): void{
        this.router.navigate(['/signup']);
    }
}

