import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './sign/login.component';
import { ForumComponent } from './forum/forum.component';
import { TopicComponent } from './topic/topic.component';
import { SignupComponent } from './sign/signup.component';
import { DetailTopicComponent } from './topic/detail-topic.component';
import { NewForumComponent } from './forum/new-forum.component';
import { NewTopicComponent } from './topic/new-topic.component';
import { EditForumComponent } from './forum/edit-forum.component';
import { EditTopicComponent } from './topic/edit-topic.component';

//Security
import { AuthGuard } from './security/auth.guard';
import {CreateForumGuard} from './security/create-forum.guard';
import {ModerateGuard} from './security/moderate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/forums', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'forums', component: ForumComponent, canActivate:[AuthGuard] },
  { path: 'signup', component: SignupComponent},
  { path: 'forum/:id', component: TopicComponent, canActivate:[AuthGuard] },
  { path: 'topic/:id', component: DetailTopicComponent, canActivate:[AuthGuard]},
  { path: 'new_forum', component: NewForumComponent, canActivate:[AuthGuard,CreateForumGuard]},
  { path: 'forum/:id/new', component: NewTopicComponent, canActivate:[AuthGuard]},
  { path: 'forum/:id/edit', component: EditForumComponent, canActivate:[AuthGuard,ModerateGuard]},
  { path: 'topic/:id/edit', component: EditTopicComponent, canActivate:[AuthGuard,ModerateGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
