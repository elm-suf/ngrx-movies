import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as fromMovies from '../actions';
import { MoviesService } from '../services/movies.service';

const queryMovies$ = createEffect(
  (actions$ = inject(Actions), service = inject(MoviesService)) => {
    return actions$.pipe(
      ofType(fromMovies.moviesActions.QUERY_MOVIES),
      switchMap((action) =>
        service.getItems(action.query).pipe(
          map((data) =>
            fromMovies.moviesActions.QUERY_MOVIES_OK({ movies: data })
          ),
          catchError((error) =>
            of(fromMovies.moviesActions.QUERY_MOVIES_ERROR({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);

export const moviesEffects = {
  queryMovies$,
};
