import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {ForumsComponent} from './forums.component';
import {ProfileComponent} from './profile.component';
import {SignupComponent} from './signup.component';
import {ForumComponent} from './forum.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        ForumsComponent,
        ProfileComponent,
        SignupComponent,
        ForumComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
