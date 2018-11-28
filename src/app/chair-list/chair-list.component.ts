import { Component, OnInit } from '@angular/core';
import { Chair } from '../chair';
import { ChairService } from '../chair.service';
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
  constructor(private chairService: ChairService) { }

  async ngOnInit() {
    this.chairs = await this.chairService.getChairs();
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
