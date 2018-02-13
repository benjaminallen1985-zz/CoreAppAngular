import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth';

constructor(private http: Http) { }

login(model: any){
    const headers = new Headers({'Content-type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.baseUrl + 'login', model, options);
}

}