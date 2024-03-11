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

  // Local Connection
  // apiGetUser = 'http://localhost/projectfocus/php/user-data.php'
  // apiGetResult = 'http://localhost/projectfocus/php/valid-exec.php'
  // apiSet = 'http://localhost/projectfocus/php/set-result.php'

  // Hosp Connection
  apiGetUser = 'https://backofficecheck.com.br/focus/php/user-data.php'
  apiGetResult = 'https://backofficecheck.com.br/focus/php/valid-exec.php'
  apiSet = 'https://backofficecheck.com.br/focus/php/set-result.php'
  
  getUserData(token: string): Observable<any> {
    const data = { 
      'token' : token 
    };
    return this.http.post<any>(this.apiGetUser, data);
  }

  setResultResponse(id: any, result: any): Observable<any>{
    const currentDate = new Date()
    const day = currentDate.getDate().toString().padStart(2, '0')
    const month = (currentDate.getMonth()+1).toString().padStart(2, '0')
    const year = currentDate.getFullYear()
    const todayDate = day + "/" + month + "/" + year;
    const data = { 
      'id_user' : id,
      'result': result,
      'today_date': todayDate
    };
    return this.http.post(this.apiSet, data)
  }

  getValidExecutation(date: any, id_user: any): Observable<any> {
    const data = {
      'id_user' : id_user,
      'today_date' : date
    }
    return this.http.post(this.apiGetResult, data)
  }

}
