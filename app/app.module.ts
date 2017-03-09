import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import {AppComponent} from './app.component';
import {LoginComponent} from './sign/login.component';
import {ForumComponent} from './forum/forum.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './sign/signup.component';
import {TopicComponent} from './topic/topic.component';
import {DetailTopicComponent} from './topic/detail-topic.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TopicComponent,
        LoginComponent,
        ForumComponent,
        ProfileComponent,
        SignupComponent,
        TopicComponent,
        DetailTopicComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
