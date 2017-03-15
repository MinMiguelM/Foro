export class Comment{

    constructor(
        public id:number,
        public commentList:Array<Comment>,
        public parent:Comment,
        public content:string,
        public points:number,
        public userId:number
    ){}

    appendChild(comment: Comment){
        this.commentList.push(comment);
    }
}