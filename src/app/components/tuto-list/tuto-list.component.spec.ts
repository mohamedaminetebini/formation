import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoListComponent } from './tuto-list.component';

describe('TutoListComponent', () => {
  let component: TutoListComponent;
  let fixture: ComponentFixture<TutoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
