import { Injectable } from '@angular/core';
import { Observable, of, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  constructor(private router: Router) {}
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  loout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Suraj sutar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
