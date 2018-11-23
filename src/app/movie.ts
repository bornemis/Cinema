export class Movie {
    id=null;
    title: string = '';
    director: string = '';
    movieType: string[];
    ageLimit: string='';
    plot: string = '';
    releaseDate: Date= new Date();
    durationInMin: number=0;
    status: string='';
    posterLink: string = '';
    trailerLink: string='';
    rating: string='';
  }