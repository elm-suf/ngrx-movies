import { ActionReducerMap } from '@ngrx/store';
import * as fromFeature from './movies.reducer';

export interface MoviesFeatureState {
  movies: fromFeature.MoviesState;
}

export const reducers: ActionReducerMap<MoviesFeatureState> = {
  movies: fromFeature.reducer,
};
