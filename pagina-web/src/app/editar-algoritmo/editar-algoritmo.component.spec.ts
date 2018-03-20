import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlgoritmoComponent } from './editar-algoritmo.component';

describe('EditarAlgoritmoComponent', () => {
  let component: EditarAlgoritmoComponent;
  let fixture: ComponentFixture<EditarAlgoritmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAlgoritmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAlgoritmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
