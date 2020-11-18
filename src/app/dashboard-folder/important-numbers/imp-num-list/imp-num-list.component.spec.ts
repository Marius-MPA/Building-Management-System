import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpNumListComponent } from './imp-num-list.component';

describe('ImpNumListComponent', () => {
  let component: ImpNumListComponent;
  let fixture: ComponentFixture<ImpNumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpNumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpNumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
