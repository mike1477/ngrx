import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApgsListComponent } from './apgs-list.component';

describe('ApgsListComponent', () => {
  let component: ApgsListComponent;
  let fixture: ComponentFixture<ApgsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApgsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApgsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
