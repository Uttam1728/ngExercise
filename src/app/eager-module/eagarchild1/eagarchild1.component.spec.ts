import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eagarchild1Component } from './eagarchild1.component';

describe('Eagarchild1Component', () => {
  let component: Eagarchild1Component;
  let fixture: ComponentFixture<Eagarchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eagarchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eagarchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
