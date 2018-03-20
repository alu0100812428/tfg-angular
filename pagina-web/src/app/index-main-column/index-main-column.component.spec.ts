import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMainColumnComponent } from './index-main-column.component';

describe('IndexMainColumnComponent', () => {
  let component: IndexMainColumnComponent;
  let fixture: ComponentFixture<IndexMainColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMainColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMainColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
