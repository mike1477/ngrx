import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ApgsEffects } from './apgs.effects';

describe('ApgsEffects', () => {
  let actions$: Observable<any>;
  let effects: ApgsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApgsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ApgsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
