import {Http, Response} from '@angular/http';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Forum} from '../model/forum.model';
import {User} from '../model/user.model';
import {RestClient} from './rest-client';

@Injectable()
export class ForumService extends RestClient<Forum> {
    baseURL = "http://localhost:8080/ForumApp/webresources/forum/";

    constructor(http: Http) {
        super(http);
    }
    
    getForums(): Observable<string> {
        let url = this.baseURL;
        return this.http.get(url)
            .map((res: Response) => {
                return res.json()
            });
    }

    updateUsers(id:number,user:User){
        let url = this.baseURL + 'update-users/' + id;
        return this.http.put(url,user)
            .map((res:Response) => {
                return res.json()
            });
    }

}