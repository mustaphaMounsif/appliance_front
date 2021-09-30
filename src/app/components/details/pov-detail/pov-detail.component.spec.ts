import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PovDetailComponent } from './pov-detail.component';

describe('PovDetailComponent', () => {
  let component: PovDetailComponent;
  let fixture: ComponentFixture<PovDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PovDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PovDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
