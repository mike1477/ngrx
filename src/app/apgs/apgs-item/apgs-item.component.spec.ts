import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApgsItemComponent } from './apgs-item.component';

describe('ApgsItemComponent', () => {
  let component: ApgsItemComponent;
  let fixture: ComponentFixture<ApgsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApgsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApgsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
