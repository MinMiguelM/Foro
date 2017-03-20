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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var user_service_1 = require('../service/user.service');
var user_model_1 = require('../model/user.model');
var role_model_1 = require('../model/role.model');
var SignupComponent = (function () {
    function SignupComponent(formBuilder, service, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.errorMessage = '';
        this.username = '';
        this.password = '';
        this.inputForm = this.formBuilder.group({
            username: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])),
            rPassword: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        var role = new role_model_1.Role(3, 'USER');
        var user = new user_model_1.User(undefined, this.username, this.password, role);
        this.service.create(user)
            .subscribe(function (success) {
            _this.router.navigate(['/login']);
        }, function (error) { return _this.errorMessage = "Error"; });
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: '../html/signup.component.html',
            styleUrls: ['../style/signup.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map