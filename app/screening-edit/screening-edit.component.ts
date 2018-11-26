import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreeningService } from '../screening.service';
import { Screening } from '../screening';
import { Location } from '@angular/common';

@Component({
  selector: 'screening-edit',
  templateUrl: './screening-edit.component.html',
  styleUrls: ['./screening-edit.component.css']
})
export class ScreeningEditComponent implements OnInit {

  id: number
  screening: Screening = null;

  constructor(
    private route: ActivatedRoute,
    private screeningService: ScreeningService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.screening = this.screeningService.getScreening(this.id);
  }

  onFormSave(screening: Screening) {
    this.screeningService.modifyScreening(this.id, screening)
    this.location.back();
  }

}
