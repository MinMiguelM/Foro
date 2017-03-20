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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
// Components
var app_component_1 = require('./app.component');
var login_component_1 = require('./sign/login.component');
var forum_component_1 = require('./forum/forum.component');
var profile_component_1 = require('./profile/profile.component');
var signup_component_1 = require('./sign/signup.component');
var topic_component_1 = require('./topic/topic.component');
var detail_topic_component_1 = require('./topic/detail-topic.component');
var new_forum_component_1 = require('./forum/new-forum.component');
var new_topic_component_1 = require('./topic/new-topic.component');
// Services
var user_service_1 = require('./service/user.service');
var auth_service_1 = require('./service/auth.service');
var forum_service_1 = require('./service/forum.service');
var topic_service_1 = require('./service/topic.service');
//Security
var auth_guard_1 = require('./security/auth.guard');
var create_forum_guard_1 = require('./security/create-forum.guard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                topic_component_1.TopicComponent,
                login_component_1.LoginComponent,
                forum_component_1.ForumComponent,
                profile_component_1.ProfileComponent,
                signup_component_1.SignupComponent,
                topic_component_1.TopicComponent,
                detail_topic_component_1.DetailTopicComponent,
                new_forum_component_1.NewForumComponent,
                new_topic_component_1.NewTopicComponent,
                app_component_1.AppComponent
            ],
            providers: [{
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                },
                user_service_1.UserService,
                auth_service_1.AuthService,
                forum_service_1.ForumService,
                topic_service_1.TopicService,
                auth_guard_1.AuthGuard,
                create_forum_guard_1.CreateForumGuard],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map