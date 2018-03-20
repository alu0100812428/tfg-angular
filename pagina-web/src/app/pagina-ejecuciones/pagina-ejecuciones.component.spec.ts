import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEjecucionesComponent } from './pagina-ejecuciones.component';

describe('PaginaEjecucionesComponent', () => {
  let component: PaginaEjecucionesComponent;
  let fixture: ComponentFixture<PaginaEjecucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaEjecucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEjecucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
