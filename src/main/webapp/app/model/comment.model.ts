import {User} from './user.model';
import {Topic} from './topic.model';

export class Comment{

    constructor(
        public id:number,
        public commentList:Array<Comment>,
        public parent:Comment,
        public approved:boolean,
        public content:string,
        public points:number,
        public idUser:User,
        public idTopic:Topic
    ){}

    appendChild(comment: Comment){
        this.commentList.push(comment);
    }
}