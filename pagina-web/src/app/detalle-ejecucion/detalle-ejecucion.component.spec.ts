import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEjecucionComponent } from './detalle-ejecucion.component';

describe('DetalleEjecucionComponent', () => {
  let component: DetalleEjecucionComponent;
  let fixture: ComponentFixture<DetalleEjecucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEjecucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
