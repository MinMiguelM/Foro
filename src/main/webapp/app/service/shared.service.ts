import { Subject }    from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import { Forum } from '../model/forum.model';

@Injectable()
export class SharedService{
    private logger = new Subject<any>();

    forumStream = this.logger.asObservable();

    sendForum(forum: Forum) {
        this.logger.next(forum);
    }
}