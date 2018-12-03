import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreeningService } from '../screening.service';
import { Screening } from '../screening';
import { Location } from '@angular/common';

@Component({
  selector: 'screening-edit',
  templateUrl: './screening-edit.component.html',
  styleUrls: ['./screening-edit.component.css']
})
export class ScreeningEditComponent implements OnInit {

  id: number=null;
  screening: Screening = new Screening();
  title='Új vetítés hozzáadása'

  constructor(
    private route: ActivatedRoute,
    private screeningService: ScreeningService,
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.screening= await this.screeningService.getScreening(this.id);
      this.title = 'A kiválasztott vetítés adatainak módosítása';
  }
  }

  async onFormSave(screening: Screening) {
    if (this.id) {
      await this.screeningService.modifyScreening(this.id, screening)
      this.location.back();
    } else {
      await this.screeningService.addScreening(screening);
      this.router.navigate(['/screenings']);
    }
  }

}
