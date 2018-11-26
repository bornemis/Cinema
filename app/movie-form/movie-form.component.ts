import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../movie';

@Component({
  selector: 'movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit, OnChanges {
  movieTypeList: string[] = ['Akció', 'Animáció', 'Családi', 'Dokumentum', 'Dráma', 'Életrajzi', 'Fantasy', 'Háborús', 'Horror', 'Kaland', 'Krimi', 'Misztikus', 'Romantikus', 'Sci-Fi', 'Thriller', 'Gengszter', 'Történelmi', 'Vígjáték', 'Western', 'Zenés'];
  movieForm = this.fb.group({
    title: ['', [Validators.required, Validators.pattern(/^[A-ZÁÉŐÓÚŰÜÖÍ][a-záéőóúűüöí0-9-]+(\s[A-ZÁÉŐÓÚŰÜÖÍa-záéőóúűüöí0-9-]+)*(\s[1-9][0-9]*\.?)?$/)]],
    director: ['', [Validators.required, Validators.pattern(/^[A-ZÁÉŐÓÚŰÜÖÍ][a-záéőóúűüöí]+(\s[A-ZÁÉŐÓÚŰÜÖÍ][a-záéőóúűüöí]+)*$/)]],
    movieType: ['',[Validators.required]],
    ageLimit: ['',[Validators.required]],
    plot: [''],
    releaseDate: ['',[Validators.required, Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/)]],
    durationInMin: ['', [Validators.required, Validators.pattern(/[1-9]\d{2}/)]],
    status: ['', [Validators.required]],
    posterLink:['',[Validators.required]],
    trailerLink: [''],
    rating: ['']
  });
  @Input() movie: Movie;
  @Output() save = new EventEmitter<Movie>();

  get title() { return this.movieForm.get('title'); }
  get director() { return this.movieForm.get('director'); }
  get movieType() { return this.movieForm.get('movieType'); }
  get ageLimit() { return this.movieForm.get('ageLimit'); }
  get plot() { return this.movieForm.get('plot'); }
  get releaseDate() { return this.movieForm.get('releaseDate'); }
  get durationInMin() { return this.movieForm.get('durationInMin'); }
  get status() { return this.movieForm.get('status'); }
  get posterLink() { return this.movieForm.get('posterLink'); }
  get trailerLink() { return this.movieForm.get('trailerLink'); }
  get rating() { return this.movieForm.get('rating'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {}
  
  ngOnChanges() {
    this.movieForm.patchValue(this.movie);
  }

  onSubmit() {
    this.save.emit(
      Object.assign(new Movie(), this.movieForm.value)
    );
  }

}
