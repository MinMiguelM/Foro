import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: '../html/login.component.html',
    styleUrls:['../style/login.component.css']
})
export class LoginComponent {
    inputForm: FormGroup;

    username: string;
    password: string;
    message: string;
    
    constructor(
        private router: Router, 
        private formBuilder: FormBuilder,
        private service: AuthService
    ) { 
        this.inputForm = this.formBuilder.group({
            username: new FormControl('',Validators.required),
            password: new FormControl('',Validators.required)
        });
    }

    logIn(): void{
        console.log('login');
        this.service.login(this.username,this.password)
            .subscribe(
                user => {
                    localStorage.setItem('USER',JSON.stringify(user));
                    this.router.navigate(['/forums']);
                },
                error => this.message = 'Credenciales incorrectas'
            );
    }

    signUp(): void{
        this.router.navigate(['/signup']);
    }
}

