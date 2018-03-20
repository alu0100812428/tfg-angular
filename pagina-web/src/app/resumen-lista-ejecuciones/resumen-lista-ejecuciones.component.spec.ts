import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenListaEjecucionesComponent } from './resumen-lista-ejecuciones.component';

describe('ResumenListaEjecucionesComponent', () => {
  let component: ResumenListaEjecucionesComponent;
  let fixture: ComponentFixture<ResumenListaEjecucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenListaEjecucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenListaEjecucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
