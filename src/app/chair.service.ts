import { Injectable } from '@angular/core';
import { Chair } from './chair';
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
export class ChairService {
  private chairUrl = 'http://localhost:8080/chairs';
  chairs: Chair[]=[
    {
      id: 1,
      roomName: '16',
      movieTitle: 'Micsoda nő',
      rowNumber: 2,
      columnNumber: 3,
      customerName: 'Kovács Ágnes',
      customerEmail: 'agnes.kovacs@gmail.com',
      ticketType: 'ADULT',
      status: 'PAYED'
    },
    {
      id: 2,
      roomName: '16',
      movieTitle: 'Micsoda nő',
      rowNumber: 2,
      columnNumber: 4,
      customerName: 'Kovács Ágnes',
      customerEmail: 'agnes.kovacs@gmail.com',
      ticketType: 'STUDENT',
      status: 'PAYED'
    },
    {
      id: 3,
      roomName: '20',
      movieTitle: 'A Keresztapa',
      rowNumber: 8,
      columnNumber: 7,
      customerName: 'Kiss Péter',
      customerEmail: 'peter.kiss@gmail.com',
      ticketType: 'ADULT',
      status: 'RENTED'
    },
    {
      id: 4,
      roomName: '20',
      movieTitle: 'A Keresztapa',
      rowNumber: 6,
      columnNumber: 6,
      customerName: 'Nagy Ramóna',
      customerEmail: 'ramona.nagy@gmail.com',
      ticketType: 'STUDENT',
      status: 'RENTED'
    }

  ]
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
  addChair(chair: Chair): Promise<Chair> {
    return this.http.post<Chair>(
      this.chairUrl,
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
