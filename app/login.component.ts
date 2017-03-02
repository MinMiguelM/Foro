import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'html/login.component.html',
    styleUrls:['style/login.component.css']
})
export class LoginComponent {
    constructor(private router: Router, 
                private app: AppComponent) { }

    logIn(): void{
        this.app.logged = true;
        this.router.navigate(['/forums']);
    }
}

