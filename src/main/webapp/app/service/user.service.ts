import {Http, Response} from '@angular/http';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {RestClient} from './rest-client';
import {User} from '../model/user.model';

@Injectable()
export class UserService extends RestClient<User> {
    baseURL = "http://localhost:8080/ForumApp/webresources/users/";

    constructor(http: Http) {
        super(http);
    }

    findByUsername(username: string){
        let url = this.baseURL + 'find-username/' + username;
        return this.http.get(url)
            .map((res: Response) => res.json());
    }
}


