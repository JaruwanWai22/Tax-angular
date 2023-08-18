import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsConfirmComponent } from './reviews-confirm.component';

describe('ReviewsConfirmComponent', () => {
  let component: ReviewsConfirmComponent;
  let fixture: ComponentFixture<ReviewsConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
