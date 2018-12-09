import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Screening } from '../screening';
import { Room } from '../room';
import { Movie } from '../movie';
import {RoomService} from '../room.service';
import {MovieService} from '../movie.service';


@Component({
  selector: 'screening-form',
  templateUrl: './screening-form.component.html',
  styleUrls: ['./screening-form.component.css']
})
export class ScreeningFormComponent implements OnInit, OnChanges {
    rooms: Room[]=[]
    movies: Movie[]=[]
    screeningForm = this.fb.group({
    movieTitle: ['', [Validators.required]],
    roomName: ['', [Validators.required]],
    startTime: ['',[Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
    screeningDate: ['',[Validators.required, Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/)]],
    movieDurationInMin: ['',[Validators.required, Validators.pattern(/^[1-9]\d{1,2}$/)]],
    screeningLanguage: ['',[Validators.required]],
    subscription: ['',[Validators.required]]
  });
  @Input() screening: Screening;
  @Output() save = new EventEmitter<Screening>();
  @Input() readOnly;
  @Input() readOnly2;
  get movieTitle() { return this.screeningForm.get('movieTitle'); }
  get roomName() { return this.screeningForm.get('roomName'); }
  get startTime() { return this.screeningForm.get('startTime'); }
  get movieDurationInMin() { return this.screeningForm.get('movieDurationInMin'); }
  get screeningDate() { return this.screeningForm.get('screeningDate'); }
  get screeningLanguage() { return this.screeningForm.get('screeningLanguage'); }
  get subscription() { return this.screeningForm.get('subscription'); }

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private movieService: MovieService
  ) { }

  async ngOnInit() {
    console.log(this.readOnly);
    this.rooms = await this.roomService.getRooms();
    this.movies=await this.movieService.getMovies();
    if(this.readOnly){
      this.screeningForm.controls['movieTitle'].disable();
      this.screeningForm.controls['movieDurationInMin'].disable();
    }else{
      this.screeningForm.controls['movieTitle'].enable();
      this.screeningForm.controls['movieDurationInMin'].enable();
    }
  }
  
  ngOnChanges() {
    this.screeningForm.patchValue(this.screening);
    if(this.readOnly){
      this.screeningForm.controls['movieTitle'].disable();
      this.screeningForm.controls['movieDurationInMin'].disable();
    }else{
      this.screeningForm.controls['movieTitle'].enable();
      this.screeningForm.controls['movieDurationInMin'].enable();
    }
  }

  onSubmit() {
    this.save.emit(
      Object.assign(new Screening(), this.screeningForm.value)
    );
  }

}
