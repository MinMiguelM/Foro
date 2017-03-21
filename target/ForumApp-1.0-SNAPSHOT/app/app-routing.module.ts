import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './sign/login.component';
import { ForumComponent } from './forum/forum.component';
import { TopicComponent } from './topic/topic.component';
import { SignupComponent } from './sign/signup.component';
import { DetailTopicComponent } from './topic/detail-topic.component';
import { NewForumComponent } from './forum/new-forum.component';
import { NewTopicComponent } from './topic/new-topic.component';

//Security
import { AuthGuard } from './security/auth.guard';
import {CreateForumGuard} from './security/create-forum.guard';

const routes: Routes = [
  { path: '', redirectTo: '/forums', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'forums', component: ForumComponent, canActivate:[AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'forum/:id', component: TopicComponent, canActivate:[AuthGuard] },
  { path: 'topic/:id', component: DetailTopicComponent, canActivate:[AuthGuard]},
  { path: 'new_forum', component: NewForumComponent, canActivate:[AuthGuard,CreateForumGuard]},
  { path: 'new_topic/:id', component: NewTopicComponent, canActivate:[AuthGuard]}
  //{ path: 'topic/:id/new_topic', component: NewTopicComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
