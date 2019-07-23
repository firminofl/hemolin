import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean = false;
  private url: string = `${environment.urlAuth}/token`
  user;

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return this.userAuthenticated;
  }

  login(user) {
    // this.userAuthenticated = true;
    return this.http.post(this.url, user).pipe(
      tap(
        res => { 
          this.userAuthenticated = true;
          this.user = res
        },
        err => this.userAuthenticated = false
      )
    );
  }

  logout() {
    this.userAuthenticated = false;
    return this.userAuthenticated;
  }

}
