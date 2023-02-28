import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public getUser(userName:string,password:string):Observable<user>{
    let url="api/Charity?userName="+userName +"&password="+password;
    return this.http.get<user>(url);
  }
}
