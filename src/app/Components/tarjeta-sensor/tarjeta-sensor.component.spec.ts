import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaSensorComponent } from './tarjeta-sensor.component';

describe('TargetaSensorComponent', () => {
  let component: TargetaSensorComponent;
  let fixture: ComponentFixture<TargetaSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaSensorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetaSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
