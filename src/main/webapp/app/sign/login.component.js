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
var forms_1 = require('@angular/forms');
var auth_service_1 = require('../service/auth.service');
var LoginComponent = (function () {
    function LoginComponent(router, formBuilder, service) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.inputForm = this.formBuilder.group({
            username: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        console.log('login');
        this.service.login(this.username, this.password)
            .subscribe(function (user) {
            localStorage.setItem('USER', JSON.stringify(user));
            _this.router.navigate(['/forums']);
        }, function (error) { return _this.message = 'Credenciales incorrectas'; });
    };
    LoginComponent.prototype.signUp = function () {
        this.router.navigate(['/signup']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: '../html/login.component.html',
            styleUrls: ['../style/login.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, forms_1.FormBuilder, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map