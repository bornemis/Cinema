import { Injectable } from '@angular/core';
import { Chair } from './chair';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from "./auth.service";
@Injectable({
  providedIn: 'root'
})
export class ChairService {
  private chairUrl = 'http://localhost:8080/chairs';
  constructor(private http: HttpClient) { }
  getChairs(): Promise<Chair[]> {
    return this.http.get<Chair[]>(
      this.chairUrl,
      httpOptions
    ).toPromise();
  }

  getChair(id: number): Promise<Chair> {
    return this.http.get<Chair>(
      `${this.chairUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  modifyChair(id: number, chair: Chair):Promise<Chair> {
    return this.http.put<Chair>(
      `${this.chairUrl}/${id}`,
      chair,
      httpOptions
    ).toPromise();
  }
  deleteChair(id:number){
    return this.http.delete<Chair>(
      `${this.chairUrl}/${id}`,
      httpOptions
    ).toPromise();
  }
  
}
