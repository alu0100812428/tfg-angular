import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaResumenEjecucionesComponent } from './columna-resumen-ejecuciones.component';

describe('ColumnaResumenEjecucionesComponent', () => {
  let component: ColumnaResumenEjecucionesComponent;
  let fixture: ComponentFixture<ColumnaResumenEjecucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaResumenEjecucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaResumenEjecucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
