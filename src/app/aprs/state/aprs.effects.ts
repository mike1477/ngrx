import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AprsService } from '../aprs.service';

import * as fromAprsActions from './aprs.actions';

@Injectable()
export class AprsEffects {
  /****************************************************************** */
  /*****LOAD Aprs API EFFECT ** */
  /****************************************************************** */
  loadAprs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAprsActions.loadAprs),
      mergeMap(() =>
        this.aprsService.getaprs().pipe(
          map((data) => fromAprsActions.loadAprsSuccess({ aprs: data })),
          catchError((error) => of(fromAprsActions.loadAprsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private aprsService: AprsService) {}
}
