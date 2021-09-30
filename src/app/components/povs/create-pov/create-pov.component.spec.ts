import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePovComponent } from './create-pov.component';

describe('CreatePovComponent', () => {
  let component: CreatePovComponent;
  let fixture: ComponentFixture<CreatePovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
