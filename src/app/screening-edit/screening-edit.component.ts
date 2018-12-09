import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreeningService } from '../screening.service';
import { MovieService } from '../movie.service';
import { RoomService } from '../room.service';
import { Screening } from '../screening';

@Component({
  selector: 'screening-edit',
  templateUrl: './screening-edit.component.html',
  styleUrls: ['./screening-edit.component.css']
})
export class ScreeningEditComponent implements OnInit {

  id: number=null;
  screening: Screening = new Screening();
  title='Új vetítés hozzáadása';
  url="";
  editable=false;
  editableRoom=false;
  readOnly:boolean;
  readOnly2:boolean;
  constructor(
    private route: ActivatedRoute,
    private screeningService: ScreeningService,
    private movieService: MovieService,
    private roomService: RoomService,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this. url = this.route.snapshot.url.join('');
    if(this.url.includes("movies")){
       if(id){
        this.id = +id;
        const movie=await this.movieService.getMovie(this.id);
        this.screening=new Screening();
        this.screening.movieTitle=movie.title;
        this.screening.movieDurationInMin=movie.durationInMin;
        this.editable=true;
        this.title='Új vetítés felvitele a kiválasztott filmhez';
       }
    }else if(this.url.includes("rooms")){
      if(id){
        this.id = +id;
        const room=await this.roomService.getRoom(this.id);
        this.screening=new Screening();
        this.screening.roomName=room.roomName;
        this.editableRoom=true;
        this.title='Új vetítés felvitele a kiválasztott teremhez';
       }
    }else{
    
    if (id) {
      this.id = +id;
      this.screening= await this.screeningService.getScreening(this.id);
      this.title = 'A kiválasztott vetítés adatainak módosítása';
  }
}
  }

  async onFormSave(screening: Screening) {
    if (this.id) {
      if(this.url.includes("movies")){
        await this.movieService.addScreeningToMovie(this.id, screening);
        this.router.navigate(['/screenings']);
      }else{
      await this.screeningService.modifyScreening(this.id, screening);
      this.router.navigate(['/screenings']);
      }
    } else {
      await this.screeningService.addScreening(screening);
      this.router.navigate(['/screenings']);
    }
  }

}
