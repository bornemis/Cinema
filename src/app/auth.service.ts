import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
 export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};
export const guestHttpOptions={
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
}
 @Injectable({
  providedIn: 'root'
})
export class AuthService {
   isLoggedIn = false;
   isAdmin=false;
  user: User;
  redirectUrl: string;
  bcryptPassword: string;
   private usersUrl = 'http://localhost:8080/users';
   constructor(
    private http: HttpClient
  ) { }
   async login(username: string, password: string): Promise<boolean> {
    const token = btoa(`${username}:${password}`);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        `Basic ${token}`
      );
    try {
      const user = await this.http.post<User>(
        `${this.usersUrl}/login`,
        {},
        httpOptions
      ).toPromise();
       this.isLoggedIn = true;
      this.user = user;
     if(user.role=='ADMIN'){
       this.isAdmin=true;
     }
      return Promise.resolve(true);
    } catch (e) {
      console.log('Hiba a bejelentkezeskor!', e);
      return Promise.resolve(false);
    }
  }
   logout() {
    this.isLoggedIn = false;
    this.isAdmin=false;
    this.user = null;
    this.redirectUrl = null;
  }
    async register(user: User): Promise<User> {
  //  const token = btoa(`${username}:${password}`);
  //  this.bcryptPassword=btoa(password);
    console.log(this.bcryptPassword);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        'Basic YWRtaW46cGFzc3dvcmQ='
      );
    try {
        return this.http.post<User>(
          `${this.usersUrl}/register`,
          user,
          httpOptions
        ).toPromise();
      } catch (e) {
        console.log('Hiba a regisztráláskor!', e);
        return null;
      }
    }
 }
