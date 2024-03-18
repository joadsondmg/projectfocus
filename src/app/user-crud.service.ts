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

  // Hosp Connection
  // apiCreateUser = 'https://backofficecheck.com.br/focus/php/count-result.php'

  createUser(userData: object): Observable<any> {
    return this.http.post<any>(this.apiCreateUser, userData).pipe(
      map(data => data.status)
    );
  }
}
