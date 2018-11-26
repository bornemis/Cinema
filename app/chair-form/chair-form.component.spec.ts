import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairFormComponent } from './chair-form.component';

describe('ChairFormComponent', () => {
  let component: ChairFormComponent;
  let fixture: ComponentFixture<ChairFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
