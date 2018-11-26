import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairStatusFilterComponent } from './chair-status-filter.component';

describe('ChairStatusFilterComponent', () => {
  let component: ChairStatusFilterComponent;
  let fixture: ComponentFixture<ChairStatusFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairStatusFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
