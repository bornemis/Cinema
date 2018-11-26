import { Component, OnInit } from '@angular/core';
import { Screening } from '../screening';
import { ScreeningService } from '../screening.service';
@Component({
  selector: 'screening-list',
  templateUrl: './screening-list.component.html',
  styleUrls: ['./screening-list.component.css']
})
export class ScreeningListComponent implements OnInit {
  screenings: Screening[] = []
  filteredScreenings = [];
  selectedDType = '2D';
  selectedScreening = null;
  constructor(private screeningService: ScreeningService) { }

  ngOnInit() {
    this.screenings = this.screeningService.getScreenings();
    this.filterScreenings();
  }
  filterScreenings() {
    this.filteredScreenings = this.selectedDType === ''
      ? this.screenings
      : this.screenings.filter(screening => screening.dType === this.selectedDType);
  }

  onFilterChange(data) {
    this.selectedDType = data;
    this.filterScreenings();
  }

}
