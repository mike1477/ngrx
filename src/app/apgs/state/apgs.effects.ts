import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApgsService } from '../apgs.service';

import * as fromApgsActions from './apgs.actions';

type NewType = ApgsService;

@Injectable()
export class ApgsEffects {
  /****************************************************************** */
  /*****LOAD Apgs API EFFECT ** */
  /****************************************************************** */
  loadApgs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromApgsActions.loadApgs),
      mergeMap(() =>
        this.apgsService.getapgs().pipe(
          map((data) => fromApgsActions.loadApgsSuccess({ apgs: data })),
          catchError((error) => of(fromApgsActions.loadApgsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private apgsService: ApgsService) {}
}
