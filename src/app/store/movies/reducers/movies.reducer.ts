import { Action, createReducer, on } from '@ngrx/store';
import { moviesActions } from '../actions';
import { Movie } from '../models';

export interface MoviesState {
  query: string;
  data: Movie[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: MoviesState = {
  query: '',
  data: [],
  loaded: false,
  loading: false,
  error: '',
};

const moviesReducer = createReducer(
  initialState,

  on(moviesActions.QUERY_MOVIES, (state, payload) => ({
    ...state,
    query: payload.query,
    loading: true,
    error: '',
  })),

  on(moviesActions.QUERY_MOVIES_OK, (state, payload) => ({
    ...state,
    data: payload.movies,
    loaded: true,
    loading: false,
  })),

  on(moviesActions.QUERY_MOVIES_ERROR, (state, payload) => ({
    ...state,
    data: [],
    error: payload.error,
    loaded: true,
    loading: false,
  }))
);

export function reducer(state = initialState, action: Action) {
  return moviesReducer(state, action);
}
