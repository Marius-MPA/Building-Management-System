import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantNumbersComponent } from './important-numbers.component';

describe('ImportantNumbersComponent', () => {
  let component: ImportantNumbersComponent;
  let fixture: ComponentFixture<ImportantNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
