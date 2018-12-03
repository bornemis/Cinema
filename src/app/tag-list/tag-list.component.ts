import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input() private tags: Observable<Set<string> | string[]> | string[];

  constructor(private router: Router) { }

  ngOnInit() {
    if (!(this.tags instanceof Observable)) {
      this.tags = of(this.tags);
    }
  }

  handleClick(tag) {
    this.router.navigateByUrl('/tag/' + tag);
  }

}
