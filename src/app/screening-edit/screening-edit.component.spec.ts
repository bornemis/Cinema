import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningEditComponent } from './screening-edit.component';

describe('MovieEditComponent', () => {
  let component: ScreeningEditComponent;
  let fixture: ComponentFixture<ScreeningEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

