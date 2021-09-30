import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuiviComponent } from './update-suivi.component';

describe('UpdateSuiviComponent', () => {
  let component: UpdateSuiviComponent;
  let fixture: ComponentFixture<UpdateSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
