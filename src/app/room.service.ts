import { Injectable } from '@angular/core';
import { Room } from './room';
import { Chair } from './chair';
import { Screening } from './screening';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private roomUrl = 'http://localhost:8080/rooms';

  constructor(private http: HttpClient) { }
  getRooms(): Promise<Room[]> {
    return this.http.get<Room[]>(
      this.roomUrl,
      httpOptions
    ).toPromise();
  }

  getRoom(id: number):Promise<Room> {
    return this.http.get<Room>(
      `${this.roomUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  modifyRoom(id: number, room: Room):Promise<Room> {
    return this.http.put<Room>(
      `${this.roomUrl}/${id}`,
      room,
      httpOptions
    ).toPromise();
  }
  addRoom(room: Room): Promise<Room> {
    return this.http.post<Room>(
      this.roomUrl,
      room,
      httpOptions
    ).toPromise();
  }
  deleteRoom(id:number){
    return this.http.delete<Room>(
      `${this.roomUrl}/${id}`,
      httpOptions
    ).toPromise();
  }
  getChairsToRoom(id: number){
    return this.http.get<Chair[]>( `${this.roomUrl}/${id}/chairs`, httpOptions).toPromise();
  }
  getScreeningsToRoom(id: number){
    return this.http.get<Screening[]>( `${this.roomUrl}/${id}/screenings`, httpOptions).toPromise();
  }
}
