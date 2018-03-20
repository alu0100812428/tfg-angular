import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEjecucionesComponent } from './lista-ejecuciones.component';

describe('ListaEjecucionesComponent', () => {
  let component: ListaEjecucionesComponent;
  let fixture: ComponentFixture<ListaEjecucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEjecucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEjecucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
