import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSceanceComponent } from './update-sceance.component';

describe('UpdateSceanceComponent', () => {
  let component: UpdateSceanceComponent;
  let fixture: ComponentFixture<UpdateSceanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSceanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSceanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
