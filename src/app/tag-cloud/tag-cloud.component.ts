import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PostService } from '../post.service';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css']
})
export class TagCloudComponent implements OnInit {

  private tags: Observable<Set<string>>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.tags = this.postService.findAll().pipe(map(posts =>
      posts.reduce((tags, post) =>
        post.tags.reduce((tags, tag) =>
          tags.add(tag), tags), new Set())));
  }

}
