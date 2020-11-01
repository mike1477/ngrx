import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AprsEffects } from './aprs.effects';

describe('AprsEffects', () => {
  let actions$: Observable<any>;
  let effects: AprsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AprsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AprsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
