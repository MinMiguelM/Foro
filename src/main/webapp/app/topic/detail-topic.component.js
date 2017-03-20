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
var comment_model_1 = require('../model/comment.model');
var DetailTopicComponent = (function () {
    function DetailTopicComponent(route, location) {
        this.route = route;
        this.location = location;
        this.html = '';
        this.manage = "<span>\n            por: Miguel &ensp;|&ensp; score: 354\n        </span>\n        <h5>\n            <a href=\"#\">upvote</a>&ensp;|&ensp;<a href=\"#\">downvote</a>&ensp;|&ensp;<a href=\"#\">editar</a>&ensp;|&ensp;<a href=\"#\">responder</a>&ensp;|&ensp;<a href=\"/ForumApp#/forums\">eliminar</a>\n        </h5>";
        this.allowedUser = false;
        this.userId = 1;
        this.comments = new Array();
        this.newcomment1 = new comment_model_1.Comment(1, new Array(), null, "Comentario viejo sobre pendejadas 1", 30, 1);
        this.newcomment2 = new comment_model_1.Comment(2, new Array(), this.newcomment1, "Comentario viejo sobre pendejadas 2", 30, 1);
        this.newcomment3 = new comment_model_1.Comment(3, new Array(), this.newcomment2, "Comentario viejo sobre pendejadas 3", 30, 1);
        this.newcomment4 = new comment_model_1.Comment(4, new Array(), this.newcomment2, "Comentario viejo sobre pendejadas 4", 30, 1);
        this.newcomment5 = new comment_model_1.Comment(5, new Array(), null, "Comentario viejo sobre pendejadas 5", 30, 2);
    }
    DetailTopicComponent.prototype.ngOnInit = function () {
        this.newcomment1.appendChild(this.newcomment2);
        this.newcomment2.appendChild(this.newcomment3);
        this.newcomment2.appendChild(this.newcomment4);
        this.comments.push(this.newcomment1);
        this.comments.push(this.newcomment5);
        for (var i = 0; i < this.comments.length; i++) {
            this.showComments(this.comments[i]);
        }
    };
    DetailTopicComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailTopicComponent.prototype.showComments = function (root) {
        //this is the parent.
        this.html = this.html + "<div>" + this.manage + "<p>" + root.content + "</p>";
        for (var i = 0; i < root.commentList.length; i++) {
            this.showComments(root.commentList[i]);
        }
        this.html += "</div>";
    };
    DetailTopicComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail-topic',
            templateUrl: '../html/detail-topic.component.html',
            styleUrls: ['../style/detail-topic.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location])
    ], DetailTopicComponent);
    return DetailTopicComponent;
}());
exports.DetailTopicComponent = DetailTopicComponent;
//# sourceMappingURL=detail-topic.component.js.map