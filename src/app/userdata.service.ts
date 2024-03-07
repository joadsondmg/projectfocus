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

  apiGet = 'http://localhost/projectfocus/php/user-data.php'
  apiSet = 'http://localhost/projectfocus/php/set-result.php'

  getUserData(token: string): Observable<any> {
    const data = { 
      'token' : token 
    };
    return this.http.post<any>(this.apiGet, data);
  }

  setResultResponse(id: number, result: number) {
    const data = { 
      'id' : id,
      'result': result
    };
    this.http.post(this.apiSet, data)
  }

}
