import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairDetailComponent } from './chair-detail.component';

describe('ChairDetailComponent', () => {
  let component: ChairDetailComponent;
  let fixture: ComponentFixture<ChairDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
