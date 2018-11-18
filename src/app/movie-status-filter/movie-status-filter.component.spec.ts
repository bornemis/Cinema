import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStatusFilterComponent } from './movie-status-filter.component';

describe('MovieStatusFilterComponent', () => {
  let component: MovieStatusFilterComponent;
  let fixture: ComponentFixture<MovieStatusFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStatusFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
