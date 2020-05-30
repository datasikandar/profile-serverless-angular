import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

    url = "https://hoe3w88rld.execute-api.us-east-1.amazonaws.com/Prod/getProfile";

    constructor(private http:HttpClient) { }

    load(): Observable<any> {
        return this.http.get<any>(this.url);
    }

}
