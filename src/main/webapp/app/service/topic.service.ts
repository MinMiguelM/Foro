import {Http, Response} from '@angular/http';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Topic} from '../model/topic.model';

@Injectable()
export class TopicService  {
    baseURL = "http://localhost:8080/ForumApp/webresources/forum/";

    constructor(private http: Http) {
    }
    
    getTopics(forumId: string): Observable<string> {
        let url = this.baseURL;
        return this.http.get(url + forumId)
            .map((res: Response) => {
                return res.json()
            });
    }

}