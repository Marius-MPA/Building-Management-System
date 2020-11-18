import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather7DaysComponent } from './weather7-days.component';

describe('Weather7DaysComponent', () => {
  let component: Weather7DaysComponent;
  let fixture: ComponentFixture<Weather7DaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Weather7DaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather7DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
