import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
 @Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(
    private authService: AuthService,
    private router: Router
  ) {
   }
   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (this.authService.isLoggedIn) {
      if(next.url.join('').includes('chairs') && next.url.join('').includes('movies')){
        console.log("Be van jelentkezve.");
      }
      if (next.data && next.data.roles) {
        if (next.data.roles.includes(this.authService.user.role)) {
          if(next.url.join('').includes('chairs') && next.url.join('').includes('movies')){
            console.log("Van joga megnezni.");
          }
          return true;
        } else {
          if(next.url.join('').includes('chairs') && next.url.join('').includes('movies')){
            console.log("Nincs joga megnezni.");
          }
          return false;
        }
      }else{
        if(next.url.join('').includes('chairs') && next.url.join('').includes('movies')){
      console.log("Nincs benne a next.data && next.data.roles-ban.");
        }
      return true;
      }
    }else{
        if (next.data && next.data.roles) {
          if (next.data.roles.includes('GUEST')) {
            return true;
          } 
        }
  }
    console.log(state.url)
     this.authService.redirectUrl = '/movies';
    this.router.navigate(['/login']);
    return false;
  }
}
