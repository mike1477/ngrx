import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as AprsReducer from '../state/aprs.reducer';
import * as AprsModel from '../state/aprs.model';

export const selectAprsState = createFeatureSelector<AprsReducer.State>(
  AprsReducer.aprsesFeatureKey
);

export const selectAllAprs = createSelector(
  selectAprsState,
  AprsReducer.selectAll
);

export const selectEntityById = createSelector(
  selectAllAprs,
  (entities, props) => entities[props.id]
);

export const selectedApr = createSelector(
  selectAprsState,
  (state) => state.selectedApr
);
