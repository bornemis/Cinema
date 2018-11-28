import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChairService } from '../chair.service';
import { Chair } from '../chair';
import { Location } from '@angular/common';

@Component({
  selector: 'chair-edit',
  templateUrl: './chair-edit.component.html',
  styleUrls: ['./chair-edit.component.css']
})
export class ChairEditComponent implements OnInit {

  id: number=null;
  chair: Chair = new Chair();
  title='Új foglalás bejegyzése'

  constructor(
    private route: ActivatedRoute,
    private chairService: ChairService,
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.chair= await this.chairService.getChair(this.id);
      this.title = 'A kiválasztott foglalás módosítása';
    }
  }

  async onFormSave(chair: Chair) {
    if (this.id) {
      await this.chairService.modifyChair(this.id, chair)
      this.location.back();
    } else {
      await this.chairService.addChair(chair);
      this.router.navigate(['/chairs']);
    }
  }
  }
  

