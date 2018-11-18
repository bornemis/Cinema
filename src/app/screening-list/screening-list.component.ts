import { Component, OnInit } from '@angular/core';
import { Screening } from '../screening';

@Component({
  selector: 'screening-list',
  templateUrl: './screening-list.component.html',
  styleUrls: ['./screening-list.component.css']
})
export class ScreeningListComponent implements OnInit {
  screenings: Screening[] = [
    {
      id: 1,
      movieTitle: "Micsoda nő",
      roomName: "16",
      startTime: '13:30',
      movieDurationInMin: 125,
      dType: "2D",
      screeningLanguage: 'ENG',
      subscription: 'HUN',
    },
    {
      id: 2,
      movieTitle: "Peppermint: A bosszú angyala",
      roomName: "20",
      startTime: '17:00',
      movieDurationInMin: 101,
      dType: "3D",
      screeningLanguage: 'HUN',
      subscription: 'NONE',
    },{
        id: 3,
        movieTitle: "A Keresztapa",
        roomName: "20",
        startTime: '20:30',
        movieDurationInMin: 125,
        dType: "2D",
        screeningLanguage: 'ENG',
        subscription: 'NONE',
    },{
        id: 4,
        movieTitle: "A Keresztapa",
        roomName: "16",
        startTime: '15:30',
        movieDurationInMin: 125,
        dType: "2D",
        screeningLanguage: 'HUN',
        subscription: 'ENG',
    }
  ]
  filteredScreenings = [];
  selectedDType = '2D';
  selectedScreening = null;
  constructor() { }

  ngOnInit() {
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
