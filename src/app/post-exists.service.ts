import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostService } from './post.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostExistsService implements CanActivate {

  constructor(private postService: PostService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.postService.findByPostNo(route.paramMap.get('postNo')).pipe(map(posts => !!posts.length));
  }
}
