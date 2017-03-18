import {Http, Response} from '@angular/http';
import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService  {
    baseURL = "http://localhost:8080/ForumApp/webresources/auth/";
    loggedIn: boolean = false;
    private logger = new Subject<boolean>();

    constructor(private http: Http) {
    }
    
    login(username: string, password: string): Observable<string> {
        let url = this.baseURL + 'login';
        return this.http.post(url, {username: username, password: password})
            .map((res: Response) => {
                this.loggedIn = true;
                this.logger.next(this.loggedIn);
                return res.json()
            });
    }

    isLoggedIn(): Observable<boolean>{
        return this.logger.asObservable();
    }
    
    logout(): Observable<string> {
        let url = this.baseURL + 'logout';
        return this.http.get(url)
            .map((res: Response) => res.text());
    }
     
    loggedUsername() : Observable<string> {
        let url = this.baseURL + 'logged-username';
        return this.http.get(url)
            .map((res: Response) => {
                this.loggedIn = false;
                this.logger.next(this.loggedIn);
                return res.text()
            });
    }

}