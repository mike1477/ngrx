import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Apgs } from './apgs.model';

export const loadApgs = createAction('[Apgs/API] Load Apgss');

export const loadApgsSuccess = createAction(
  '[Apgs/API] Load Apgs Success',
  props<{ apgs: Apgs[] }>()
);

export const loadApgsFailure = createAction(
  '[Apgs/API] Load Apgs Failure',
  props<{ error: string }>()
);

export const addApgs = createAction(
  '[Apgs/API] Add Apgs',
  props<{ apgs: Apgs }>()
);

export const upsertApgs = createAction(
  '[Apgs/API] Upsert Apgs',
  props<{ apgs: Apgs }>()
);

export const addApgss = createAction(
  '[Apgs/API] Add Apgss',
  props<{ apgss: Apgs[] }>()
);

export const upsertApgss = createAction(
  '[Apgs/API] Upsert Apgss',
  props<{ apgss: Apgs[] }>()
);

export const updateApgs = createAction(
  '[Apgs/API] Update Apgs',
  props<{ apgs: Update<Apgs> }>()
);

export const updateApgss = createAction(
  '[Apgs/API] Update Apgss',
  props<{ apgss: Update<Apgs>[] }>()
);

export const deleteApgs = createAction(
  '[Apgs/API] Delete Apgs',
  props<{ id: string }>()
);

export const deleteApgss = createAction(
  '[Apgs/API] Delete Apgss',
  props<{ ids: string[] }>()
);

export const clearApgss = createAction('[Apgs/API] Clear Apgss');
