import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './login.component';
import { ForumsComponent } from './forums.component';
import { ForumComponent } from './forum.component';
import { SignupComponent } from './signup.component';
import {TopicComponent} from './topic.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'forums', component: ForumsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forum/:id', component: ForumComponent },
  { path: 'topic/:id', component: TopicComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
