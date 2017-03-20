"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_component_1 = require('./sign/login.component');
var forum_component_1 = require('./forum/forum.component');
var topic_component_1 = require('./topic/topic.component');
var signup_component_1 = require('./sign/signup.component');
var detail_topic_component_1 = require('./topic/detail-topic.component');
var new_forum_component_1 = require('./forum/new-forum.component');
var new_topic_component_1 = require('./topic/new-topic.component');
//Security
var auth_guard_1 = require('./security/auth.guard');
var create_forum_guard_1 = require('./security/create-forum.guard');
var routes = [
    { path: '', redirectTo: '/forums', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'forums', component: forum_component_1.ForumComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'forum/:id', component: topic_component_1.TopicComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'topic/:id', component: detail_topic_component_1.DetailTopicComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'new_forum', component: new_forum_component_1.NewForumComponent, canActivate: [auth_guard_1.AuthGuard, create_forum_guard_1.CreateForumGuard] },
    { path: 'new_topic', component: new_topic_component_1.NewTopicComponent, canActivate: [auth_guard_1.AuthGuard] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map