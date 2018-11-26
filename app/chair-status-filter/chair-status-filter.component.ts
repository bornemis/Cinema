import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chair-status-filter',
  templateUrl: './chair-status-filter.component.html',
  styleUrls: ['./chair-status-filter.component.css']
})
export class ChairStatusFilterComponent implements OnInit {

  @Input('status') selectedStatus = 'RENTED'
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onFilterChange(data) {
    this.selectedStatus = data.value;
    this.change.emit(this.selectedStatus);
  }

}
