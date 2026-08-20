import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioChivasComponent } from './calendario-chivas.component';

describe('CalendarioChivasComponent', () => {
  let component: CalendarioChivasComponent;
  let fixture: ComponentFixture<CalendarioChivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioChivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioChivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
