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
import { OverviewForumComponent } from './forum/overview-forum.component';
import { EditForumComponent } from './forum/edit-forum.component';
import { CommentComponent } from './comment/comment.component';
import { EditTopicComponent } from './topic/edit-topic.component';

// Services
import {UserService} from './service/user.service';
import { AuthService } from './service/auth.service';
import { ForumService } from './service/forum.service';
import { TopicService } from './service/topic.service';
import { NewTopicService } from './service/new-topic.service';
import { CommentService } from './service/comment.service';

//Security
import { AuthGuard } from './security/auth.guard';
import {CreateForumGuard} from './security/create-forum.guard';
import {ModerateGuard} from './security/moderate.guard';

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
        CommentComponent,
        ProfileComponent,
        SignupComponent,
        TopicComponent,
        DetailTopicComponent,
        NewForumComponent,
        NewTopicComponent,
        EditForumComponent,
        EditTopicComponent,
        OverviewForumComponent,
        AppComponent
    ],
    providers: [{
        provide: LocationStrategy, 
        useClass: HashLocationStrategy
    },
        UserService,
        AuthService,
        ForumService,
        TopicService,
        CommentService,
        NewTopicService,
        AuthGuard,
        ModerateGuard,
        CreateForumGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
