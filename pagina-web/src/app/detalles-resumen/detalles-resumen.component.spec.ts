import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesResumenComponent } from './detalles-resumen.component';

describe('DetallesResumenComponent', () => {
  let component: DetallesResumenComponent;
  let fixture: ComponentFixture<DetallesResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
