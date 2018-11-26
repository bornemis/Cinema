import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'd-filter',
  templateUrl: './d-filter.component.html',
  styleUrls: ['./d-filter.component.css']
})
export class DFilterComponent implements OnInit {
  @Input('status') selectedDType = '2D'
  @Output() change = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onFilterChange(data) {
    this.selectedDType = data.value;
    this.change.emit(this.selectedDType);
  }

}

