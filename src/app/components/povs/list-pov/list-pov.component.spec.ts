import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPovComponent } from './list-pov.component';

describe('ListPovComponent', () => {
  let component: ListPovComponent;
  let fixture: ComponentFixture<ListPovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
