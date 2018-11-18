import { Component, OnInit } from '@angular/core';
import { Chair } from '../chair';

@Component({
  selector: 'chair-list',
  templateUrl: './chair-list.component.html',
  styleUrls: ['./chair-list.component.css']
})
export class ChairListComponent implements OnInit {
  chairs: Chair[]=[
    {
      id: 1,
      roomName: '16',
      movieTitle: 'Micsoda nő',
      rowNumber: 2,
      columnNumber: 3,
      customerName: 'Kovács Ágnes',
      customerEmail: 'agnes.kovacs@gmail.com',
      ticketType: 'ADULT',
      status: 'PAYED'
    },
    {
      id: 2,
      roomName: '16',
      movieTitle: 'Micsoda nő',
      rowNumber: 2,
      columnNumber: 4,
      customerName: 'Kovács Ágnes',
      customerEmail: 'agnes.kovacs@gmail.com',
      ticketType: 'STUDENT',
      status: 'PAYED'
    },
    {
      id: 3,
      roomName: '20',
      movieTitle: 'A Keresztapa',
      rowNumber: 8,
      columnNumber: 7,
      customerName: 'Kiss Péter',
      customerEmail: 'peter.kiss@gmail.com',
      ticketType: 'ADULT',
      status: 'RENTED'
    },
    {
      id: 4,
      roomName: '20',
      movieTitle: 'A Keresztapa',
      rowNumber: 6,
      columnNumber: 6,
      customerName: 'Nagy Ramóna',
      customerEmail: 'ramona.nagy@gmail.com',
      ticketType: 'STUDENT',
      status: 'RENTED'
    }

  ]
  filteredChairs = [];
  selectedStatus = 'RENTED';
  selectedChair = null;
  constructor() { }

  ngOnInit() {
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
