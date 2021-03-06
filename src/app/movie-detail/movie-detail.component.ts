import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MovieService } from '../movie.service';
import { AuthService } from '../auth.service';
import { Movie } from '../movie';
import { DomSanitizer} from '@angular/platform-browser';
//import { AuthService } from '../auth.service';
 @Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
    id: number;
    movie: Movie;
    constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private authService:AuthService,
    private sanitizer: DomSanitizer
    //private authService: AuthService
  ) { }


  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.movie =await this.movieService.getMovie(this.id);
    }
  }
  async onFormDelete() {
      await this.movieService.deleteMovie(this.id);
      this.router.navigate(['/movies']);
  }

 }
