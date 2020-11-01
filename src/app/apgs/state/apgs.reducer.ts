import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Apgs } from './apgs.model';
import * as ApgsActions from './apgs.actions';

export const apgsesFeatureKey = 'apgs';

export interface State extends EntityState<Apgs> {
  // additional entities state properties
  error: string;
}

export const adapter: EntityAdapter<Apgs> = createEntityAdapter<Apgs>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(ApgsActions.addApgs, (state, action) =>
    adapter.addOne(action.apgs, state)
  ),
  on(ApgsActions.upsertApgs, (state, action) =>
    adapter.upsertOne(action.apgs, state)
  ),
  on(ApgsActions.addApgss, (state, action) =>
    adapter.addMany(action.apgss, state)
  ),
  on(ApgsActions.upsertApgss, (state, action) =>
    adapter.upsertMany(action.apgss, state)
  ),
  on(ApgsActions.updateApgs, (state, action) =>
    adapter.updateOne(action.apgs, state)
  ),
  on(ApgsActions.updateApgss, (state, action) =>
    adapter.updateMany(action.apgss, state)
  ),
  on(ApgsActions.deleteApgs, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ApgsActions.deleteApgss, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ApgsActions.loadApgsSuccess, (state, action) =>
    adapter.setAll(action.apgs, state)
  ),
  on(ApgsActions.loadApgsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ApgsActions.clearApgss, (state) => adapter.removeAll(state))
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
