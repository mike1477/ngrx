import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Aprs } from './aprs.model';
import * as AprsActions from './aprs.actions';

export const aprsesFeatureKey = 'aprs';

export interface State extends EntityState<Aprs> {
  // additional entities state properties,
  error: string;
  selectedApr: Aprs;
}

export const adapter: EntityAdapter<Aprs> = createEntityAdapter<Aprs>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties,
  error: null,
  selectedApr: {
    id: null,
    name: null,
    description: null,
  },
});

export const reducer = createReducer(
  initialState,
  on(AprsActions.addAprs, (state, action) =>
    adapter.addOne(action.aprs, state)
  ),
  on(AprsActions.upsertAprs, (state, action) =>
    adapter.upsertOne(action.aprs, state)
  ),
  on(AprsActions.addAprss, (state, action) =>
    adapter.addMany(action.aprss, state)
  ),
  on(AprsActions.upsertAprss, (state, action) =>
    adapter.upsertMany(action.aprss, state)
  ),
  on(AprsActions.updateAprs, (state, action) =>
    adapter.updateOne(action.aprs, state)
  ),
  on(AprsActions.updateAprss, (state, action) =>
    adapter.updateMany(action.aprss, state)
  ),
  on(AprsActions.deleteAprs, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(AprsActions.deleteAprss, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(AprsActions.loadAprsSuccess, (state, action) =>
    adapter.setAll(action.aprs, state)
  ),
  on(AprsActions.loadAprsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(AprsActions.aprSelected, (state, action) => {
    return {
      ...state,
      selectedApr: action.apr,
    };
  }),
  on(AprsActions.clearAprss, (state) => adapter.removeAll(state))
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
