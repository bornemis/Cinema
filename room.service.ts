import { Injectable } from '@angular/core';
import { Room } from './room';
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
export class RoomService {
  private roomUrl = 'http://localhost:8080/rooms';
  rooms: Room[] = [
    {
      id: 1,
      roomName: '16',
      numberOfRows: 4,
      numberOfColumns: 10,
      availablePlaces: 40
    },
    {
      id: 2,
      roomName: '20',
      numberOfRows: 8,
      numberOfColumns: 10,
      availablePlaces: 80
    },{
      id: 3,
      roomName: 'Retro',
      numberOfRows: 7,
      numberOfColumns: 8,
      availablePlaces: 56
    },{
      id: 4,
      roomName: '13',
      numberOfRows: 13,
      numberOfColumns: 13,
      availablePlaces: 169
    }
  ]
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
}
