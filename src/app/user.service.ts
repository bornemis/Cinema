import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export type User = {
  firstName: string
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: BehaviorSubject<User>;

  constructor() {
    this.currentUser = new BehaviorSubject(null);
  }

  setCurrentUser(user: User): void {
    this.currentUser.next(user);
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  signOut(): void {
    this.setCurrentUser(null);
  }
}
