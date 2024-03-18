import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  constructor(
    private http: HttpClient
  ) { }

  // Local Connection
  apiCreateUser = 'http://localhost/projectfocus/php/create-user.php'
  apiUpdateUser = 'http://localhost/projectfocus/php/update-user.php'
  apiGetUser = 'http://localhost/projectfocus/php/get-user.php'

  // Hosp Connection
  // apiCreateUser = 'https://backofficecheck.com.br/focus/php/create-user.php'
  // apiUpdateUser = 'https://backofficecheck.com.br/focus/php/update-user.php'
  // apiGetUser = 'https://backofficecheck.com.br/focus/php/get-user.php'

  createUser(userData: object): Observable<any> {
    return this.http.post<any>(this.apiCreateUser, userData).pipe(
      map(data => data.status)
    );
  }

  updatePassword(objectUser: any): Observable<any> {
    return this.http.post<any>(this.apiUpdateUser, objectUser).pipe(
      map(data => data.status)
    )
  }

  validFirstAcces(objectUser: any): Observable<any>{
    return this.http.post<any>(this.apiGetUser, objectUser).pipe(
      map(data => data.result)
    )
  }
}
