import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

}
