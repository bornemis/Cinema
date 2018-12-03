import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { PostService, Post } from '../post.service';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.css']
})
export class TagPageComponent implements OnInit {

  private posts: Observable<Post[]>;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.activatedRoute.paramMap.pipe(mergeMap(paramMap =>
      this.postService.findByPredicate(post =>
        post.tags.includes(paramMap.get('tag')))));
  }

}
