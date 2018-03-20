import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaEjecucionesComponent } from './columna-ejecuciones.component';

describe('ColumnaEjecucionesComponent', () => {
  let component: ColumnaEjecucionesComponent;
  let fixture: ComponentFixture<ColumnaEjecucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaEjecucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaEjecucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
