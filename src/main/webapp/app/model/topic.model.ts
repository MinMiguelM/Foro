import {Forum} from '../model/forum.model';
import {User} from '../model/user.model';
export class Topic {
    constructor(
        public id:number,
        public title:string,
        public date: Date,
        public content:string,
        public points:number,
        public idForum:Forum,
        public idUser:User,
        public approved:boolean
    ){
        idForum = new Forum();
        idUser = new User();
    }
}