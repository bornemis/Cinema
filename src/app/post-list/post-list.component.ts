import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../post.service';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() private posts: Observable<Post[]>;
  private currentUser: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }

}
