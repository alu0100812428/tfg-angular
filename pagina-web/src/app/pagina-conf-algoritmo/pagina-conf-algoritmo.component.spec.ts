import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConfAlgoritmoComponent } from './pagina-conf-algoritmo.component';

describe('PaginaConfAlgoritmoComponent', () => {
  let component: PaginaConfAlgoritmoComponent;
  let fixture: ComponentFixture<PaginaConfAlgoritmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaConfAlgoritmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaConfAlgoritmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
