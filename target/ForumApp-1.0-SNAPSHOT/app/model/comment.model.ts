import {User} from './user.model';
import {Topic} from './topic.model';

export class Comment{

    constructor(
        public id:number,
        public commentList:Array<Comment>,
        public idParent:number,
        public approved:boolean,
        public content:string,
        public points:number,
        public userId:number,
        public username:string,
        public idTopic:Topic,
        public date: Date,
        public usersList:Array<User>
    ){}

    appendChild(comment: Comment){
        this.commentList.push(comment);
    }
}