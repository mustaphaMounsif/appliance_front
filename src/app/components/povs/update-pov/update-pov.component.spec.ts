import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePovComponent } from './update-pov.component';

describe('UpdatePovComponent', () => {
  let component: UpdatePovComponent;
  let fixture: ComponentFixture<UpdatePovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
