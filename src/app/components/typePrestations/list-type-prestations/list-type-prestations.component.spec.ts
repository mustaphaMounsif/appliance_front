import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypePrestationsComponent } from './list-type-prestations.component';

describe('ListTypePrestationsComponent', () => {
  let component: ListTypePrestationsComponent;
  let fixture: ComponentFixture<ListTypePrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypePrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypePrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
