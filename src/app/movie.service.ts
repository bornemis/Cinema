import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Screening } from './screening';
import { Chair } from './chair';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { guestHttpOptions } from "./auth.service";
import { httpOptions } from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://localhost:8080/movies';
  constructor(private http: HttpClient) { }
  getMovies(): Promise<Movie[]> {
    return this.http.get<Movie[]>(
      this.movieUrl,
      guestHttpOptions
    ).toPromise();
  }

  getMovie(id: number): Promise<Movie> {
    return this.http.get<Movie>(
      `${this.movieUrl}/${id}`,
      guestHttpOptions
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
  getScreeningsToMovie(id: number){
    return this.http.get<Screening[]>(`${this.movieUrl}/${id}/screenings`,
    guestHttpOptions).toPromise();
  }
  addScreeningToMovie(id: number, screening: Screening){
      return this.http.post<Screening>(`${this.movieUrl}/${id}/screenings`,screening, httpOptions).toPromise();
  }
  getChairsToMovie(id:number){
      return this.http.get<Chair[]>(`${this.movieUrl}/${id}/chairs`, httpOptions).toPromise();
  }
 
  }

