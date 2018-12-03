import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';
 @Component({
  selector: 'room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
    id: number;
    room: Room;
    constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private router: Router
  ) { }
  @Input() showEdit=true;
  @Input() showDelete=true;
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.room =await this.roomService.getRoom(this.id);
    }
  }
  async onFormDelete() {
      await this.roomService.deleteRoom(this.id);
      this.router.navigate(['/rooms']);
  }
 }
