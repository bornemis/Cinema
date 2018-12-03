import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ChairService } from '../chair.service';
import { Chair } from '../chair';
 @Component({
  selector: 'chair-detail',
  templateUrl: './chair-detail.component.html',
  styleUrls: ['./chair-detail.component.css']
})
export class ChairDetailComponent implements OnInit {
    id: number;
    chair: Chair;
    constructor(
    private route: ActivatedRoute,
    private chairService: ChairService,
    private router: Router
  ) { }
  @Input() showEdit=true;
  @Input() showDelete=true;
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.chair =await this.chairService.getChair(this.id);
    }
  }
  async onFormDelete() {
      await this.chairService.deleteChair(this.id);
      this.router.navigate(['/chairs']);
  }
 }
