import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Chair } from '../chair';
import { Room } from '../room';
import { Movie } from '../movie';
import {RoomService} from '../room.service';
import {MovieService} from '../movie.service';
import {ChairService} from '../chair.service';
@Component({
  selector: 'chair-form',
  templateUrl: './chair-form.component.html',
  styleUrls: ['./chair-form.component.css']
})
export class ChairFormComponent implements OnInit {
  rooms: Room[]=[]
  movies: Movie[]=[]
  chairRowNumbers: string[]=[]
  chairColumnNumbers: string[]=[]
  chairs: Chair[]=[]
  row: number;
  column: number;
  actualRoom: Room;
  chairForm = this.fb.group({
    movieTitle: ['', [Validators.required]],
    roomName: ['',[Validators.required]],
    customerName: ['', [Validators.required, Validators.pattern(/^(Dr\.\s|dr\.\s)?[A-ZÁÉŐÓÚŰÜÖÍ][a-záéőóúűüöí]+(\s[A-ZÁÉŐÓÚŰÜÖÍ][a-záéőóúűüöí]+)*/)]],
    customerEmail: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/)]],
    rowNumber: ['', [Validators.required]],
    columnNumber: ['', [Validators.required]],
    ticketType: ['',[Validators.required]],
    status: ['',[Validators.required]]
  });
  @Input() chair: Chair;

  @Input() showStatus;
  @Input() readOnly;
  @Input() readOnlyWhenEdit;
  @Output() save = new EventEmitter<Chair>();

  get movieTitle(){return this.chairForm.get('movieTitle');}
  get roomName(){return this.chairForm.get('roomName');}
  get customerName() { return this.chairForm.get('customerName'); }
  get customerEmail() { return this.chairForm.get('customerEmail'); }
  get rowNumber() { return this.chairForm.get('rowNumber'); }
  get columnNumber() { return this.chairForm.get('columnNumber'); }
  get ticketType() { return this.chairForm.get('ticketType'); }
  get status() { return this.chairForm.get('status'); }
  
  constructor( private fb: FormBuilder,
    private roomService: RoomService,
    private movieService: MovieService,
    private chairService: ChairService) { }

  async ngOnInit() {
    console.log("readOnly", this.readOnly);
    console.log("readOnlyWhenEdit", this.readOnlyWhenEdit);
    this.rooms = await this.roomService.getRooms();
    this.movies=await this.movieService.getMovies();
    this.chairs=await this.chairService.getChairs();
    if(this.chair.customerName!=''){
        this.row=this.chair.rowNumber;
        this.column=this.chair.columnNumber;
    }
    var i=0;
    while(i<this.rooms.length && this.rooms[i].roomName!=this.chair.roomName){
      ++i;
    }
    this.actualRoom=this.rooms[i];
    var size=0;
    
    for(i=0; i<this.actualRoom.numberOfRows;++i){
      
       if(this.isRowAvailable(i)){
        this.chairRowNumbers[size]=(i+1).toString();
        size+=1;
       }
    }
    size=0;
    for(i=0; i<this.actualRoom.numberOfColumns;++i){
      
      if(this.isColumnAvailable(i)){
       this.chairColumnNumbers[size]=(i+1).toString();
       size+=1;
      }
   }
  }
  isRowAvailable(index: number){
    var i=0;
    while(i<this.chairs.length && (this.chairs[i].rowNumber-1)!=index){
      i+=1;
    }
    if(i<this.chairs.length){
      var j=0;
      var l=true;
      var c=0;
      while(j<this.chairs.length && l){
        if(this.chairs[j].rowNumber-1==index){
            c+=1;
        }
        if(c==this.actualRoom.numberOfColumns){
          l=false;
        }
        j+=1;
      }
      return l;
    }else{
      return true;
    }
  }
  isColumnAvailable(index:number){
    var i=0;
    while(i<this.chairs.length && (this.chairs[i].columnNumber-1)!=index){
      i+=1;
    }
    if(i<this.chairs.length){
    return false;
    }else{
      return true;
    }
  }
  isAvailable(index:number, notAvailableIndexes:string[]){
    var i=0;
    while(i<notAvailableIndexes.length && (index.toString()!=notAvailableIndexes[i])){
      i+=1;
    }
    return (i>=notAvailableIndexes.length);
  }
  setAvailableColumnNumbersToRow(rowNumber:number){
    var size=0;
    this.chairColumnNumbers=[];
    var i=0;
    var notAvailableColumns=[];
    for(i=0; i<this.chairs.length; ++i){
        if(this.chairs[i].rowNumber==rowNumber){
           notAvailableColumns[size]=(this.chairs[i].columnNumber-1).toString();
           size+=1;
        }
    }
    size=0;
    i=0;
    for(i=0; i<this.actualRoom.numberOfColumns; ++i){
      if(this.isAvailable(i, notAvailableColumns)){
        this.chairColumnNumbers[size]=(i+1).toString();
        size+=1;
      }
    }
  }
  setAvailableRowNumbersToColumn(columnNumber:number){
    var size=0;
    this.chairRowNumbers=[];
    var i=0;
    var notAvailableRows=[];
    for(i=0; i<this.chairs.length; ++i){
        if(this.chairs[i].columnNumber==columnNumber){
           notAvailableRows[size]=(this.chairs[i].rowNumber-1).toString();
           size+=1;
        }
    }
    size=0;
    i=0;
    for(i=0; i<this.actualRoom.numberOfRows; ++i){
      if(this.isAvailable(i, notAvailableRows)){
        this.chairRowNumbers[size]=(i+1).toString();
        size+=1;
      }
    }
  }
  
  ngOnChanges() {
    if(this.chairForm.value.rowNumber!=''){
      this.setAvailableColumnNumbersToRow(this.chairForm.value.rowNumber);
    }
    this.chairForm.patchValue(this.chair);
  }

  onSubmit() {
    if(this.chair.customerName!=''){
    this.chairForm.value.rowNumber=this.row;
    this.chairForm.value.columnNumber=this.column;
    }
    this.save.emit(
      Object.assign(new Chair(), this.chairForm.value)
    );
  }

}
