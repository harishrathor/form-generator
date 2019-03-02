import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFieldsetComponent } from './c-fieldset.component';

describe('CFieldsetComponent', () => {
  let component: CFieldsetComponent;
  let fixture: ComponentFixture<CFieldsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFieldsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
