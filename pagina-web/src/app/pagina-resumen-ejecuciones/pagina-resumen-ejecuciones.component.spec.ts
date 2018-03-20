import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaResumenEjecucionesComponent } from './pagina-resumen-ejecuciones.component';

describe('PaginaResumenEjecucionesComponent', () => {
  let component: PaginaResumenEjecucionesComponent;
  let fixture: ComponentFixture<PaginaResumenEjecucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaResumenEjecucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaResumenEjecucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
