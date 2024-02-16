import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoDetailsComponent } from './tuto-details.component';

describe('TutoDetailsComponent', () => {
  let component: TutoDetailsComponent;
  let fixture: ComponentFixture<TutoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
