import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDataModalComponent } from './tax-data-modal.component';

describe('TaxDataModalComponent', () => {
  let component: TaxDataModalComponent;
  let fixture: ComponentFixture<TaxDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDataModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
