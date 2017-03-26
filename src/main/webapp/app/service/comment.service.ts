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
        let url = this.baseURL + topicId + '/unapproved';
        return this.http.get(url)
            .map((res: Response) => {
                return res.json()
            });
    }

    addPoints(comment:Comment):Observable<string>{
        let url = this.baseURL +'add-points/'+ comment.id;
        return this.http.put(url,comment)
            .map((res:Response) => {
                return res.json()
            });
    }

    removePoints(comment:Comment):Observable<string>{
        let url = this.baseURL +'remove-points/'+ comment.id;
        return this.http.put(url,comment)
            .map((res:Response) => {
                return res.json()
            });
    }

}