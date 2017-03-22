import {Role} from './role.model';
import {Topic} from './topic.model';

export class User{
    constructor(
        public id:number,
        public username:string,
        public password:string,
        public role:Role,
        public topicList: Array<Topic>
    ){}
}