import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBoxComponent } from './footer-box.component';

describe('FooterBoxComponent', () => {
  let component: FooterBoxComponent;
  let fixture: ComponentFixture<FooterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
