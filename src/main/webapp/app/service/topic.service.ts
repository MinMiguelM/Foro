import {Http, Response} from '@angular/http';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Topic} from '../model/topic.model';
import {RestClient} from './rest-client';

@Injectable()
export class TopicService extends RestClient<Topic> {
    baseURL = "http://localhost:8080/ForumApp/webresources/topic/";
    baseURLForum = "http://localhost:8080/ForumApp/webresources/forum/";

    constructor(http: Http) {
        super(http);
    }

    
    getTopics(forumId: string): Observable<string> {
        let url = this.baseURLForum;
        return this.http.get(url + forumId)
            .map((res: Response) => {
                return res.json()
            });
    }
    
    getTopic(topicId: number) {
        let url = this.baseURL;
        return this.http.get(url + topicId)
            .map((res: Response) => {
                return res.json()
            });
    }

    getUnapprovedTopics(id:number):Observable<string>{
        let url = this.baseURLForum + id + '/unapproved';
        return this.http.get(url)
            .map((res: Response) => {
                return res.json()
            });
    }

    addPoints(topic:Topic):Observable<string>
    {
        let url = this.baseURL +'add-points/'+ topic.id;
        return this.http.put(url,topic)
            .map((res:Response) => {
                return res.json()
            });
    }

    removePoints(topic:Topic):Observable<string>{
        let url = this.baseURL +'remove-points/'+ topic.id;
        return this.http.put(url,topic)
            .map((res:Response) => {
                return res.json()
            });
    }
}