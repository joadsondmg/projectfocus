import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Local Connection
  // api = 'http://localhost/projectfocus/php/auth.php'

  // Hosp Connection
  api = 'https://backofficecheck.com.br/focus/php/auth.php'

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('access-token')
  }

  login(userData: object): Observable<string> {
    return this.http.post<any>(this.api, userData).pipe(
      map(data => data.token)
    );
  }

  logout() {
    sessionStorage.removeItem('access-token')
  }
}
