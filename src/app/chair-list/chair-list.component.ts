import { Component, OnInit, Input } from '@angular/core';
import { Chair } from '../chair';
import { Movie } from '../movie';
import { ChairService } from '../chair.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { RoomService } from '../room.service';
import { ScreeningService } from '../screening.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'chair-list',
  templateUrl: './chair-list.component.html',
  styleUrls: ['./chair-list.component.css']
})
export class ChairListComponent implements OnInit {
  chairs: Chair[] = []
  filteredChairs = [];
  selectedStatus = 'RENTED';
  selectedChair = null;
  id: number=null;
  title='';
  movie: Movie;
  url='';
  @Input() showAdd = true;
  @Input() showMovieChair= false;
  constructor(private chairService: ChairService,
    private route: ActivatedRoute,
    private movieService:MovieService,
    private roomService:RoomService,
    private screeningService: ScreeningService,
    private authService: AuthService) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this. url = this.route.snapshot.url.join('');
    if(this.authService.isAdmin){
      this.title="Foglalások listája"
    }else{
      this.title="Aktív foglalások listája";
    }
    if (id) {
      this.id = +id;
      if(this.url.includes('movies')){  
      this.movie=await this.movieService.getMovie(this.id);
      this.chairs= await this.movieService.getChairsToMovie(this.id);
      this.showMovieChair=true;
      this.showAdd=false;
      if(this.authService.isAdmin){
      this.title = "A kiválasztott filmhez tartozó foglalások:";
      }else{
        this.title = "A kiválasztott filmhez tartozó, még nem fizetett foglalások:";
      }
      }else if(this.url.includes('rooms')){
        this.chairs=await this.roomService.getChairsToRoom(this.id);
        this.title = "A kiválasztott teremhez tartozó foglalások:";
        this.showMovieChair=false;
        this.showAdd=false;
      }else{
        this.chairs=await this.screeningService.getChairsToScreening(this.id);
        if(this.authService.isAdmin){
        this.title = "A kiválasztott vetítéshez tartozó foglalások:";
        }else{
          this.title = "A kiválasztott vetítéshez, tartozó még nem fizetett foglalások:";
        }
        this.showMovieChair=false;
        this.showAdd=false;
      }
    }else{
      this.chairs = await this.chairService.getChairs();
    }
    this.filterChairs();
  }
  filterChairs() {
    this.filteredChairs = this.selectedStatus === ''
      ? this.chairs
      : this.chairs.filter(chair => chair.status === this.selectedStatus);
  }

  onFilterChange(data) {
    this.selectedStatus = data;
    this.filterChairs();
  }


}
