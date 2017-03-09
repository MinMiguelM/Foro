import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './sign/login.component';
import { ForumComponent } from './forum/forum.component';
import { TopicComponent } from './topic/topic.component';
import { SignupComponent } from './sign/signup.component';
import {DetailTopicComponent} from './topic/detail-topic.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'forums', component: ForumComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forum/:id', component: TopicComponent },
  { path: 'topic/:id', component: DetailTopicComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
