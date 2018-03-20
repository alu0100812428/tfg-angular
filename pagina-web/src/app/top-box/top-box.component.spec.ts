import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBoxComponent } from './top-box.component';

describe('TopBoxComponent', () => {
  let component: TopBoxComponent;
  let fixture: ComponentFixture<TopBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
