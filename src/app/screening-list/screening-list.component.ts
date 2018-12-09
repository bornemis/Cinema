import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Screening } from '../screening';
import { Movie } from '../movie';
import { Room } from '../room';
import { ScreeningService } from '../screening.service';
import { RoomService } from '../room.service';
import { MovieService } from '../movie.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'screening-list',
  templateUrl: './screening-list.component.html',
  styleUrls: ['./screening-list.component.css']
})
export class ScreeningListComponent implements OnInit {
  screenings: Screening[] = []

  selectedDType = '';
  selectedScreening = null;
  id: number=null;
  url='';
  title="Vetítések listája";
  movie: Movie;
  room: Room;
  @Input() showAdd = true;
  @Input() showMovieScreeningAdd= false;
  @Input() showRoomScreeningAdd=false;
  constructor(private screeningService: ScreeningService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private movieService:MovieService,
    private roomService: RoomService
    ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this. url = this.route.snapshot.url.join('');
    if (id) {
      this.id = +id;
      if(this.url.includes('movies')){
      this.movie=await this.movieService.getMovie(this.id);
      this.screenings= await this.movieService.getScreeningsToMovie(this.id);
      this.showMovieScreeningAdd=true;
      this.showAdd=false
      this.title = "A kiválasztott filmhez tartozó vetítések:";
      }else if(this.url.includes('rooms')){
        this.room=await this.roomService.getRoom(this.id);
        this.screenings= await this.roomService.getScreeningsToRoom(this.id);
        this.showMovieScreeningAdd=false;
        this.showAdd=false;
        this.showRoomScreeningAdd=true;
        this.title = "A kiválasztott teremhez tartozó vetítések:";
      }
    }else{
    this.screenings = await this.screeningService.getScreenings();
    }

  }




}
