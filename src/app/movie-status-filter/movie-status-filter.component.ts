import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-status-filter',
  templateUrl: './movie-status-filter.component.html',
  styleUrls: ['./movie-status-filter.component.css']
})
export class MovieStatusFilterComponent implements OnInit {

  @Input('status') selectedStatus = 'ACTUAL'
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onFilterChange(data) {
    this.selectedStatus = data.value;
    this.change.emit(this.selectedStatus);
  }

}
