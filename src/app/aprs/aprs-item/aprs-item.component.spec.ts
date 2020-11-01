import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprsItemComponent } from './aprs-item.component';

describe('AprsItemComponent', () => {
  let component: AprsItemComponent;
  let fixture: ComponentFixture<AprsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
