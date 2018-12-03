import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export type Post = {
  title: string,
  text: string,
  author: string,
  tags: string[]
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  findAll(): Observable<Post[]> {
    return of([
      {
        postNo: 1,
        title: 'Test title',
        text: 'Test text.',
        author: 'Sandor Rakonczai',
        tags: ['ik'],
      },
      {
        postNo: 2,
        title: 'Test title #2',
        text: 'Test text.',
        author: 'Zoltan Horvath',
        tags: ['elte', 'ik'],
      }
    ]);
  }

  findByPredicate(predicate): Observable<Post[]> {
    return this.findAll().pipe(map(x => x.filter(predicate)));
  }

  findByPostNo(postNo): Observable<Post[]> {
    return this.findByPredicate(post => post.postNo === +postNo);
  }
}
