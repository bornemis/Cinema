import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = []
  room: Room;
  id: number=null;
  selecteRoom = null;
  title="Termek listája"
  url='';
  showAdd = true;
  constructor(private roomService: RoomService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.title="A kiválasztott vetítéshez tartozó terem:"
      this.showAdd=false;
      this.room = await this.roomService.getRoom(this.id);
    }else{
      this.rooms = await this.roomService.getRooms();
    }
  }

}
