import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(
    private http: HttpClient
  ) { }

  api = 'http://localhost/projectfocus/php/user-data.php'

  getUserData(token: string): Observable<any> {
    const data = { 
      'token' : token 
    };
    return this.http.post<any>(this.api, data);
  }

}
