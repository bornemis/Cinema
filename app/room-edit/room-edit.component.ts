import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Location } from '@angular/common';

@Component({
  selector: 'room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  id: number
  room: Room = null;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.room = this.roomService.getRoom(this.id);
  }

  onFormSave(room: Room) {
    this.roomService.modifyRoom(this.id, room)
    this.location.back();
  }

}
