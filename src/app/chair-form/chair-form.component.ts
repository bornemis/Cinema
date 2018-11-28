import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Chair } from '../chair';
@Component({
  selector: 'chair-form',
  templateUrl: './chair-form.component.html',
  styleUrls: ['./chair-form.component.css']
})
export class ChairFormComponent implements OnInit {
  chairForm = this.fb.group({
    customerName: ['', [Validators.required, Validators.pattern(/^(Dr\.\s|dr\.\s)?[A-ZÁÉŐÓÚŰÜÖÍ][a-záéőóúűüöí]+(\s[A-ZÁÉŐÓÚŰÜÖÍ][a-záéőóúűüöí]+)*/)]],
    customerEmail: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/)]],
    ticketType: ['',[Validators.required]],
    status: ['',[Validators.required]]
  });
  @Input() chair: Chair;
  @Input() showStatus=false;
  @Output() save = new EventEmitter<Chair>();
  get customerName() { return this.chairForm.get('customerName'); }
  get customerEmail() { return this.chairForm.get('customerEmail'); }
  get ticketType() { return this.chairForm.get('ticketType'); }
  get status() { return this.chairForm.get('status'); }
  
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.chairForm.patchValue(this.chair);
  }

  onSubmit() {
    this.save.emit(
      Object.assign(new Chair(), this.chairForm.value)
    );
  }

}
