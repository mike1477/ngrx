import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Aprs } from './aprs.model';

export const loadAprs = createAction('[Aprs/API] Load Aprs');

export const loadAprsSuccess = createAction(
  '[Apgs/API] Load Aprs Success',
  props<{ aprs: Aprs[] }>()
);

export const loadAprsFailure = createAction(
  '[Apgs/API] Load Aprs Failure',
  props<{ error: string }>()
);

export const aprSelected = createAction(
  '[Aprs/API] Add Aprs Selected',
  props<{ apr: Aprs }>()
);

export const addAprs = createAction(
  '[Aprs/API] Add Aprs',
  props<{ aprs: Aprs }>()
);

export const upsertAprs = createAction(
  '[Aprs/API] Upsert Aprs',
  props<{ aprs: Aprs }>()
);

export const addAprss = createAction(
  '[Aprs/API] Add Aprss',
  props<{ aprss: Aprs[] }>()
);

export const upsertAprss = createAction(
  '[Aprs/API] Upsert Aprss',
  props<{ aprss: Aprs[] }>()
);

export const updateAprs = createAction(
  '[Aprs/API] Update Aprs',
  props<{ aprs: Update<Aprs> }>()
);

export const updateAprss = createAction(
  '[Aprs/API] Update Aprss',
  props<{ aprss: Update<Aprs>[] }>()
);

export const deleteAprs = createAction(
  '[Aprs/API] Delete Aprs',
  props<{ id: string }>()
);

export const deleteAprss = createAction(
  '[Aprs/API] Delete Aprss',
  props<{ ids: string[] }>()
);

export const clearAprss = createAction('[Aprs/API] Clear Aprss');
