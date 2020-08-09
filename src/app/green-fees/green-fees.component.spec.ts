import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenFeesComponent } from './green-fees.component';

describe('GreenFeesComponent', () => {
  let component: GreenFeesComponent;
  let fixture: ComponentFixture<GreenFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
