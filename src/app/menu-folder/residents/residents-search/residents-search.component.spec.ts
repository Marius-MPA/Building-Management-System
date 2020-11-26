import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsSearchComponent } from './residents-search.component';

describe('ResidentsSearchComponent', () => {
  let component: ResidentsSearchComponent;
  let fixture: ComponentFixture<ResidentsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
