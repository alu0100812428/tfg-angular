import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetallesResumenComponent } from './lista-detalles-resumen.component';

describe('ListaDetallesResumenComponent', () => {
  let component: ListaDetallesResumenComponent;
  let fixture: ComponentFixture<ListaDetallesResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDetallesResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDetallesResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
