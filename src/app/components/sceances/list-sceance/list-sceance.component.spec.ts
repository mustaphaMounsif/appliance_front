import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSceanceComponent } from './list-sceance.component';

describe('ListSceanceComponent', () => {
  let component: ListSceanceComponent;
  let fixture: ComponentFixture<ListSceanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSceanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSceanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
