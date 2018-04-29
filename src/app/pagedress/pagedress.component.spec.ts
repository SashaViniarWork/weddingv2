import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedressComponent } from './pagedress.component';

describe('PagedressComponent', () => {
  let component: PagedressComponent;
  let fixture: ComponentFixture<PagedressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
