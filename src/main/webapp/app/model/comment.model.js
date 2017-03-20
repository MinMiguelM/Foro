"use strict";
var Comment = (function () {
    function Comment(id, commentList, parent, content, points, userId) {
        this.id = id;
        this.commentList = commentList;
        this.parent = parent;
        this.content = content;
        this.points = points;
        this.userId = userId;
    }
    Comment.prototype.appendChild = function (comment) {
        this.commentList.push(comment);
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.model.js.map