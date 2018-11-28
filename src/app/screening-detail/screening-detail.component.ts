import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ScreeningService } from '../screening.service';
import { Screening } from '../screening';
 @Component({
  selector: 'screening-detail',
  templateUrl: './screening-detail.component.html',
  styleUrls: ['./screening-detail.component.css']
})
export class ScreeningDetailComponent implements OnInit {
    id: number;
    screening: Screening;
    constructor(
    private route: ActivatedRoute,
    private screeningService: ScreeningService,
    private router: Router
  ) { }
  @Input() showEdit=true;
  @Input() showDelete=true;
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.screening =await this.screeningService.getScreening(this.id);
    }
  }
  async onFormDelete(screening: Screening) {
      await this.screeningService.deleteScreening(this.id);
      this.router.navigate(['/screenings']);
  }
 }
