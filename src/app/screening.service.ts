import { Injectable } from '@angular/core';
import { Screening } from './screening';
import { Chair } from './chair';
import { Room } from './room';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { guestHttpOptions } from "./auth.service";
import { httpOptions } from "./auth.service";
@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
  private screeningUrl = 'http://localhost:8080/screenings';
  constructor(private http: HttpClient) { }
  getScreenings(): Promise<Screening[]> {
    return this.http.get<Screening[]>(
      this.screeningUrl,
      guestHttpOptions
    ).toPromise();
  }

  getScreening(id: number): Promise<Screening> {
    return this.http.get<Screening>(
      `${this.screeningUrl}/${id}`,
      guestHttpOptions
    ).toPromise();
  }

  modifyScreening(id: number, screening: Screening) :Promise<Screening> {
    return this.http.put<Screening>(
      `${this.screeningUrl}/${id}`,
      screening,
      httpOptions
    ).toPromise();
  }
  addScreening(screening: Screening) : Promise<Screening> {
    return this.http.post<Screening>(
      this.screeningUrl,
      screening,
      httpOptions
    ).toPromise();
  }
  deleteScreening(id:number){
    return this.http.delete<Screening>(
      `${this.screeningUrl}/${id}`,
      httpOptions
    ).toPromise();
  }
  getChairsToScreening(id:number){
    return this.http.get<Chair[]>(
      `${this.screeningUrl}/${id}/chairs`,
      httpOptions
    ).toPromise();
  }
  getRoomsToScreening(id:number){
    return this.http.get<Room[]>(
      `${this.screeningUrl}/${id}/rooms`,
      httpOptions
    ).toPromise();
  }
  addChairToScreening(id:number, chair: Chair){
    return this.http.post<Chair>(
      `${this.screeningUrl}/${id}/chairs`,
      chair,
      httpOptions
    ).toPromise();
  }
}
