import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Screening } from '../screening';

@Component({
  selector: 'screening-form',
  templateUrl: './screening-form.component.html',
  styleUrls: ['./screening-form.component.css']
})
export class ScreeningFormComponent implements OnInit, OnChanges {
  screeningForm = this.fb.group({
    movieTitle: ['', [Validators.required, Validators.pattern(/^[A-ZÁÉŐÓÚŰÜÖÍ][a-záéőóúűüöí0-9-]+(\s[A-ZÁÉŐÓÚŰÜÖÍa-záéőóúűüöí0-9-]+)*(\s[1-9][0-9]*\.?)?$/)]],
    roomName: ['', [Validators.required, Validators.pattern(/^[A-ZÁÉŐÓÚŰÜÖÍ1-9][a-záéőóúűüöí0-9-]*(\s[A-ZÁÉŐÓÚŰÜÖÍ1-9][a-záéőóúűüöí0-9-]*)*$/)]],
    startTime: ['',[Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
    movieDurationInMin: ['',[Validators.required, Validators.pattern(/^[1-9]\d{1,2}$/)]],
    dType: ['', [Validators.required]],
    screeningLanguage: ['',[Validators.required]],
    subscription: ['',[Validators.required]]
  });
  @Input() screening: Screening;
  @Output() save = new EventEmitter<Screening>();

  get movieTitle() { return this.screeningForm.get('movieTitle'); }
  get roomName() { return this.screeningForm.get('roomName'); }
  get startTime() { return this.screeningForm.get('startTime'); }
  get movieDurationInMin() { return this.screeningForm.get('movieDurationInMin'); }
  get dType() { return this.screeningForm.get('dType'); }
  get screeningLanguage() { return this.screeningForm.get('screeningLanguage'); }
  get subscription() { return this.screeningForm.get('subscription'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {}
  
  ngOnChanges() {
    this.screeningForm.patchValue(this.screening);
  }

  onSubmit() {
    this.save.emit(
      Object.assign(new Screening(), this.screeningForm.value)
    );
  }

}
