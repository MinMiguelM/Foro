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
// Adapted from http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var CreateForumGuard = (function () {
    function CreateForumGuard(router) {
        this.router = router;
    }
    CreateForumGuard.prototype.canActivate = function () {
        if (localStorage.getItem('USER')) {
            var user = localStorage.getItem('USER');
            this.user = JSON.parse(user);
            if (this.user.role.name == 'ADMIN') {
                return true;
            }
            this.router.navigate(['/forums']);
        }
        return false;
    };
    CreateForumGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CreateForumGuard);
    return CreateForumGuard;
}());
exports.CreateForumGuard = CreateForumGuard;
//# sourceMappingURL=create-forum.guard.js.map