import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Components
import {AppComponent} from './app.component';
import {LoginComponent} from './sign/login.component';
import {ForumComponent} from './forum/forum.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './sign/signup.component';
import {TopicComponent} from './topic/topic.component';
import {DetailTopicComponent} from './topic/detail-topic.component';
import { NewForumComponent } from './forum/new-forum.component';
import { NewTopicComponent } from './topic/new-topic.component';

// Services
import {UserService} from './service/user.service';
import { AuthService } from './service/auth.service';

//Security
import { AuthGuard } from './security/auth.guard';

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
        NewForumComponent,
        NewTopicComponent,
        AppComponent
    ],
    providers: [{
        provide: LocationStrategy, 
        useClass: HashLocationStrategy
    },
        UserService,
        AuthService,
        AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
