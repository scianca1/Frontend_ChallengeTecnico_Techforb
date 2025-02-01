import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelErrorComponent } from './cartel-error.component';

describe('CartelErrorComponent', () => {
  let component: CartelErrorComponent;
  let fixture: ComponentFixture<CartelErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartelErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartelErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
