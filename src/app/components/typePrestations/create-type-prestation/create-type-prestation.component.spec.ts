import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypePrestationComponent } from './create-type-prestation.component';

describe('CreateTypePrestationComponent', () => {
  let component: CreateTypePrestationComponent;
  let fixture: ComponentFixture<CreateTypePrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTypePrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypePrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
