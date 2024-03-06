import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  api = 'http://localhost/projectfocus/php/auth.php'

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access-token')
  }

  login(userData: object): Observable<string> {
    return this.http.post<any>(this.api, userData).pipe(
      map(data => data.token)
    );
  }

  logout() {
    localStorage.removeItem('access-token')
  }
}
