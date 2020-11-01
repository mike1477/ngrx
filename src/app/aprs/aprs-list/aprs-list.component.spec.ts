import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprsListComponent } from './aprs-list.component';

describe('AprsListComponent', () => {
  let component: AprsListComponent;
  let fixture: ComponentFixture<AprsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
