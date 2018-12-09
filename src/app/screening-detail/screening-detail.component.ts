import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ScreeningService } from '../screening.service';
import { AuthService } from '../auth.service';
import { Screening } from '../screening';
import { Chair } from '../chair';
 @Component({
  selector: 'screening-detail',
  templateUrl: './screening-detail.component.html',
  styleUrls: ['./screening-detail.component.css']
})
export class ScreeningDetailComponent implements OnInit {
    id: number;
    screening: Screening;
    chair: Chair;
    constructor(
    private route: ActivatedRoute,
    private screeningService: ScreeningService,
    private router: Router,
    private authService:AuthService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      
      this.id = +id;
      this.screening =await this.screeningService.getScreening(this.id);
      this.chair=new Chair();
      this.chair.movieTitle=this.screening.movieTitle;
      this.chair.roomName=this.screening.roomName;
    }
  }
  async onFormDelete() {
      await this.screeningService.deleteScreening(this.id);
      this.router.navigate(['/screenings']);
  }
 }
