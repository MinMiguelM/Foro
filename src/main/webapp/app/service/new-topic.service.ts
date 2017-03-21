import {Http, Response} from '@angular/http';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Topic} from '../model/topic.model';

@Injectable()
export class NewTopicService  {
    baseURL = "http://localhost:8080/ForumApp/webresources/topic/";

    constructor(private http: Http) {
    }
    
    addTopic(topic:Topic){
        let url = this.baseURL;
        return this.http.post(url, topic)
             .map((res: Response) => {
                return res.json()
            });
    }

}