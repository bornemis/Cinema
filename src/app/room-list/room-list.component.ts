import { Component, OnInit } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
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
  selecteRoom = null;
  constructor() { }

  ngOnInit() {
  }

}
