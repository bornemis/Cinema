import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-confirm-post-deletion-page',
  templateUrl: './confirm-post-deletion-page.component.html',
  styleUrls: ['./confirm-post-deletion-page.component.css']
})
export class ConfirmPostDeletionPageComponent implements OnInit {

  private post: Observable<Post[]>;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.post = this.activatedRoute.paramMap.pipe(mergeMap(paramMap =>
      this.postService.findByPostNo(paramMap.get('postNo'))));
  }

  handleConfirm() {
    // Actual deletion...

    this.router.navigateByUrl('/home');
  }
}
