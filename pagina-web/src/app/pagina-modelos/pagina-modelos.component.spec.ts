import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaModelosComponent } from './pagina-modelos.component';

describe('PaginaModelosComponent', () => {
  let component: PaginaModelosComponent;
  let fixture: ComponentFixture<PaginaModelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaModelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
