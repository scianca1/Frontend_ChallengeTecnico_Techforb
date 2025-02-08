import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasGeneralesComponent } from './tarjetas-generales.component';

describe('TarjetasGeneralesComponent', () => {
  let component: TarjetasGeneralesComponent;
  let fixture: ComponentFixture<TarjetasGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasGeneralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
