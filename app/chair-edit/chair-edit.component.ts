import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChairService } from '../chair.service';
import { Chair } from '../chair';
import { Location } from '@angular/common';

@Component({
  selector: 'chair-edit',
  templateUrl: './chair-edit.component.html',
  styleUrls: ['./chair-edit.component.css']
})
export class ChairEditComponent implements OnInit {

  id: number
  chair: Chair = null;

  constructor(
    private route: ActivatedRoute,
    private chairService: ChairService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.chair = this.chairService.getChair(this.id);
  }

  onFormSave(chair: Chair) {
    this.chairService.modifyChair(this.id, chair)
    this.location.back();
  }

}