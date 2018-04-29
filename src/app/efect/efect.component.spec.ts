import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectComponent } from './efect.component';

describe('EfectComponent', () => {
  let component: EfectComponent;
  let fixture: ComponentFixture<EfectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
