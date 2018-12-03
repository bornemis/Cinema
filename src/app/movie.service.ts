import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://localhost:8080/movies';
  constructor(private http: HttpClient) { }
  getMovies(): Promise<Movie[]> {
    return this.http.get<Movie[]>(
      this.movieUrl,
      httpOptions
    ).toPromise();
  }

  getMovie(id: number): Promise<Movie> {
    return this.http.get<Movie>(
      `${this.movieUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  modifyMovie(id: number, movie: Movie):Promise<Movie> {
    return this.http.put<Movie>(
      `${this.movieUrl}/${id}`,
      movie,
      httpOptions
    ).toPromise();
  }
  addMovie(movie: Movie): Promise<Movie> {
    return this.http.post<Movie>(
      this.movieUrl,
      movie,
      httpOptions
    ).toPromise();
  }
  deleteMovie(id:number){
    return this.http.delete<Movie>(
      `${this.movieUrl}/${id}`,
      httpOptions
    ).toPromise();
  }
  }

