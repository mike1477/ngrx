import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAprs from '../aprs/state/aprs.reducer';
import * as fromApgs from '../apgs/state/apgs.reducer';

export interface AppState {
  [fromAprs.aprsesFeatureKey]: fromAprs.State;
  [fromApgs.apgsesFeatureKey]: fromApgs.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAprs.aprsesFeatureKey]: fromAprs.reducer,
  [fromApgs.apgsesFeatureKey]: fromApgs.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
