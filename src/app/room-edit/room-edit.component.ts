import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Location } from '@angular/common';

@Component({
  selector: 'room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  id: number=null;
  room: Room = new Room();
  title='Új terem hozzáadása'

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.room= await this.roomService.getRoom(this.id);
      this.title = 'A kiválasztott terem adatainak módosítása';
  }
}

  async onFormSave(room: Room) {
    if (this.id) {
      await this.roomService.modifyRoom(this.id, room)
      this.location.back();
    } else {
      await this.roomService.addRoom(room);
      this.router.navigate(['/rooms']);
    }
  }

}
