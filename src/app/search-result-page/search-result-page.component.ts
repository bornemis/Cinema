import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { PostService, Post } from '../post.service';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {

  private posts: Observable<Post[]>;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.activatedRoute.paramMap.pipe(mergeMap(paramMap =>
      this.postService.findByPredicate(post => {
        const keywords = paramMap.get('keywords').trim().split(/\s+/);
        
        return keywords.some(k => {
          const pattern = new RegExp(k, 'i');
          
          return pattern.test(post.title) || pattern.test(post.text);
        });
      })));
  }

}
