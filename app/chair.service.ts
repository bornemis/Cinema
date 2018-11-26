import { Injectable } from '@angular/core';
import { Chair } from './chair';
@Injectable({
  providedIn: 'root'
})
export class ChairService {
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
  getChairs(): Chair[] {
    return this.chairs;
  }

  getChair(id: number): Chair {
    return this.chairs.find(chair => chair.id === id);
  }

  modifyChair(id: number, chair: Chair) {
    const oChair = this.getChair(id);
    Object.assign(oChair, chair);
  }
  constructor() { }
}
