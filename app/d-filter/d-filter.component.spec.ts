import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DFilterComponent } from './d-filter.component';

describe('DFilterComponent', () => {
  let component: DFilterComponent;
  let fixture: ComponentFixture<DFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
