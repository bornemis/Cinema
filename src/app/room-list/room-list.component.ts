import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = []
  selecteRoom = null;
  @Input() showAdd = true;
  constructor(private roomService: RoomService) { }

  async ngOnInit() {
    this.rooms = await this.roomService.getRooms();
  }

}
