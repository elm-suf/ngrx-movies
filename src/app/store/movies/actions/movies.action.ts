import { createAction, props } from '@ngrx/store';
import { Movie } from '../models';

const QUERY_MOVIES = createAction(
  '[Movies] Query Movies',
  props<{ query: string }>()
);
const QUERY_MOVIES_OK = createAction(
  '[Movies] Query Movies ✅ SUCCESS',
  props<{ movies: Movie[] }>()
);
const QUERY_MOVIES_ERROR = createAction(
  '[Movies] Query Movies ❌ ERROR',
  props<{ error: string }>()
);

export const moviesActions = {
  QUERY_MOVIES,
  QUERY_MOVIES_OK,
  QUERY_MOVIES_ERROR,
};
