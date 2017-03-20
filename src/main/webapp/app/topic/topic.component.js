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
var common_1 = require('@angular/common');
var router_2 = require('@angular/router');
var topic_service_1 = require('../service/topic.service');
var TopicComponent = (function () {
    function TopicComponent(activatedRoute, location, router, topicService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.topicService = topicService;
        this.topics = [];
        console.log("routes");
        console.log(activatedRoute); // array of states
        console.log("ForumID:", activatedRoute.url.value[1].path);
        this.topicService.getTopics(activatedRoute.url.value[1].path)
            .subscribe(function (topics) {
            _this.topics = topics;
        }, function (error) { return _this.message = 'No tienes permisos para ver esta página'; });
    }
    TopicComponent.prototype.ngOnInit = function () {
        // get topics of a forum with id {id} at params of route
    };
    TopicComponent.prototype.addTopic = function () {
        this.router.navigate(['/new_topic']);
    };
    TopicComponent.prototype.goBack = function () {
        this.location.back();
    };
    TopicComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'topic',
            templateUrl: '../html/topic.component.html',
            styleUrls: ['../style/topic.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, router_2.Router, topic_service_1.TopicService])
    ], TopicComponent);
    return TopicComponent;
}());
exports.TopicComponent = TopicComponent;
//# sourceMappingURL=topic.component.js.map