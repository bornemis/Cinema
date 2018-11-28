import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
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
    private router: Router
  ) { }
  @Input() showEdit=true;
  @Input() showDelete=true;
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.movie =await this.movieService.getMovie(this.id);
    }
  }
  async onFormDelete(movie: Movie) {
      await this.movieService.deleteMovie(this.id);
      this.router.navigate(['/movies']);
  }
 }
