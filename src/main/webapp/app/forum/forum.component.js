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
var forum_service_1 = require('../service/forum.service');
var ForumComponent = (function () {
    function ForumComponent(router, forumService) {
        var _this = this;
        this.router = router;
        this.forumService = forumService;
        //forums:Array<string> = ['Forum1','Forum2','Forum3','Forum4','Forum5'];
        this.forums = [];
        var user = localStorage.getItem('USER');
        this.user = JSON.parse(user);
        this.forumService.getForums()
            .subscribe(function (forums) {
            _this.forums = forums;
        }, function (error) { return _this.message = 'No tienes permisos para ver esta página'; });
    }
    ForumComponent.prototype.addForum = function () {
        this.router.navigate(['/new_forum']);
    };
    ForumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forum',
            templateUrl: '../html/forum.component.html',
            styleUrls: ['../style/forum.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, forum_service_1.ForumService])
    ], ForumComponent);
    return ForumComponent;
}());
exports.ForumComponent = ForumComponent;
//# sourceMappingURL=forum.component.js.map