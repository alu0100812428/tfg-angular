import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirModeloFormComponent } from './subir-modelo-form.component';

describe('SubirModeloFormComponent', () => {
  let component: SubirModeloFormComponent;
  let fixture: ComponentFixture<SubirModeloFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirModeloFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirModeloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
