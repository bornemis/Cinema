import { Injectable } from '@angular/core';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
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
  constructor() { }
  getRooms(): Room[] {
    return this.rooms;
  }

  getRoom(id: number): Room {
    return this.rooms.find(room => room.id === id);
  }

  modifyRoom(id: number, room: Room) {
    const oRoom = this.getRoom(id);
    Object.assign(oRoom, room);
  }
}
