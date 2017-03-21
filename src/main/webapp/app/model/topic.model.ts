import {Forum} from '../model/forum.model';
import {User} from '../model/user.model';
export class Topic {
    constructor(
        public id:number,
        public title:string,
        public date: string,
        public content:string,
        public points:number,
        public idForum:Forum,
        public idUser:User
    ){
        idForum = new Forum();
        idUser = new User();
    }
}