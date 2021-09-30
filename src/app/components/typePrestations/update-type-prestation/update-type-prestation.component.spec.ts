import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypePrestationComponent } from './update-type-prestation.component';

describe('UpdateTypePrestationComponent', () => {
  let component: UpdateTypePrestationComponent;
  let fixture: ComponentFixture<UpdateTypePrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypePrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypePrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
