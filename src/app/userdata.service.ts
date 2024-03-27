import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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
  // apiGetAllResult = 'http://localhost/projectfocus/php/get-results.php'
  // apiSetResult = 'http://localhost/projectfocus/php/set-result.php'
  // apiFilterResult = 'http://localhost/projectfocus/php/filter-result.php'
  // apiCountResult = 'http://localhost/projectfocus/php/count-result.php'
  

  // Hosp Connection
  apiGetUser = 'https://backofficecheck.com.br/focus/php/user-data.php'
  apiGetResult = 'https://backofficecheck.com.br/focus/php/valid-exec.php'
  apiGetAllResult = 'https://backofficecheck.com.br/focus/php/get-results.php'
  apiSetResult = 'https://backofficecheck.com.br/focus/php/set-result.php'
  apiFilterResult = 'https://backofficecheck.com.br/focus/php/filter-result.php'
  apiCountResult = 'https://backofficecheck.com.br/focus/php/count-result.php'
  
  getUserData(token: string): Observable<any> {
    const data = { 
      'token' : token 
    };
    return this.http.post<any>(this.apiGetUser, data);
  }

  setResultResponse(id: any, objectResult: any): Observable<any>{
    const data = { 
      'id_user' : id,
      'result': objectResult.resultResponse,
      'o_error': objectResult.omissionError,
      'a_error': objectResult.actionError,
      'time': objectResult.time,
      'date': objectResult.date
    };
    return this.http.post(this.apiSetResult, data)
  }

  getValidExecutation(date: any, id_user: any): Observable<any> {
    const data = {
      'id_user' : id_user,
      'date' : date
    }
    return this.http.post(this.apiGetResult, data)
  }

  getAllResults(dateI: any, dateF: any): Observable<any> {
    const data = {
      'date_i' : dateI,
      'date_f' : dateF
    }
    return this.http.post(this.apiGetAllResult, data)
  }

  getFilteredResults(dateI: any, dateF: any, page: any, itemsPerPage: any): Observable<any>{
    const data = {
      'date_i' : dateI,
      'date_f' : dateF,
      'page' :  page,
      'itemsPerPage': itemsPerPage
    }
    return this.http.post(this.apiFilterResult, data)
  }

  countResults(dateI: any, dateF: any): Observable<any> {
    const data = {
      'date_i' : dateI,
      'date_f' : dateF
    }
    return this.http.post(this.apiCountResult, data)
  }

}
