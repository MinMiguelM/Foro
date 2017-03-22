import { User } from './user.model';

export class Forum {
    constructor(
        public id:number,
        public title:string,
        public moderate:boolean,
        public usersList: Array<User>
    ){}
}