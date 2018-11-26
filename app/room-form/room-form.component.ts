import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Room } from '../room';

@Component({
  selector: 'room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit, OnChanges {
  roomForm = this.fb.group({
    roomName: ['', [Validators.required, Validators.pattern(/^[A-ZÁÉŐÓÚŰÜÖÍ1-9][a-záéőóúűüöí0-9-]*(\s[A-ZÁÉŐÓÚŰÜÖÍ1-9][a-záéőóúűüöí0-9-]*)*/)]],
    numberOfRows: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]?/)]],
    numberOfColumns: ['',[Validators.required,Validators.pattern(/^[1-9][0-9]?/)]],
    availablePlaces: ['',[Validators.required,Validators.pattern(/^[1-9][0-9]{0,1,2}/)]]
  });
  @Input() room: Room;
  @Output() save = new EventEmitter<Room>();

  get roomName() { return this.roomForm.get('roomName'); }
  get numberOfRows() { return this.roomForm.get('numberOfRows'); }
  get numberOfColumns() { return this.roomForm.get('numberOfColumns'); }
  get availablePlaces() { return this.roomForm.get('availablePlaces'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {}
  
  ngOnChanges() {
    this.roomForm.patchValue(this.room);
  }

  onSubmit() {
    this.save.emit(
      Object.assign(new Room(), this.roomForm.value)
    );
  }

}

