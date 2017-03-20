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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.baseURL = "http://localhost:8080/ForumApp/webresources/auth/";
        this.logger = new Rx_1.Subject();
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var url = this.baseURL + 'login';
        return this.http.post(url, { username: username, password: password })
            .map(function (res) {
            _this.loggedIn = true;
            localStorage.setItem("LOGGED", 'true');
            _this.logger.next(_this.loggedIn);
            return res.json();
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.logger.asObservable();
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var url = this.baseURL + 'logout';
        return this.http.get(url)
            .map(function (res) {
            _this.loggedIn = false;
            localStorage.setItem("LOGGED", 'false');
            _this.logger.next(_this.loggedIn);
            return res.text();
        });
    };
    AuthService.prototype.loggedUsername = function () {
        var url = this.baseURL + 'logged-username';
        return this.http.get(url)
            .map(function (res) {
            return res.text();
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map