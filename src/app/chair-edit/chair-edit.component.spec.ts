import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairEditComponent } from './chair-edit.component';

describe('ChairEditComponent', () => {
  let component: ChairEditComponent;
  let fixture: ComponentFixture<ChairEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
