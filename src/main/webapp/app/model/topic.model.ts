import {Forum} from '../model/forum.model';
import {User} from '../model/user.model';
export class Topic {
    constructor(
        public id:number,
        public title:string,
        public date: Date,
        public content:string,
        public points:number,
        public forumId:number,
        public userId:number,
        public username:string,
        public approved:boolean
    ){ }
}