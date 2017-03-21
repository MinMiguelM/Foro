import {Http, Response} from '@angular/http';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Comment } from '../model/comment.model';
import { RestClient } from './rest-client';

@Injectable()
export class CommentService extends RestClient<Comment> {
    baseURL = "http://localhost:8080/ForumApp/webresources/comment/";
    baseURLTopic = "http://localhost:8080/ForumApp/webresources/topic/";

    constructor(http: Http) {
        super(http);
    }

    
    getComments(topicId: string): Observable<string> {
        let url = this.baseURL;
        return this.http.get(url + topicId)
            .map((res: Response) => {
                return res.json()
            });
    }

    getUnapprovedComments(topicId:number):Observable<string>{
        let url = this.baseURLTopic + topicId + '/unapproved';
        return this.http.get(url)
            .map((res: Response) => {
                return res.json()
            });
    }

}