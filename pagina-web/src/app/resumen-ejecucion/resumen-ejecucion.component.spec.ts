import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenEjecucionComponent } from './resumen-ejecucion.component';

describe('ResumenEjecucionComponent', () => {
  let component: ResumenEjecucionComponent;
  let fixture: ComponentFixture<ResumenEjecucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenEjecucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
