import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators'
import { MoviesService } from '../../services/movies.service';
import { MoviesActions } from './movies.actions';
import { of } from 'rxjs';

@Injectable()
export class MoviesEffects {
  moviesByGenreIdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.genre_movies_list_request),
      mergeMap(({ genreId, page }) => this.moviesService.getGenreMoviesList(genreId, page)
        .pipe(
          map((response) =>
            MoviesActions.genre_movies_list_response(response.results, response.total_pages)
          ),
          catchError((error) => of(MoviesActions.genre_movies_list_failure(error)))
        )
      )
    )
  );

  genresListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.genre_list_request),
      mergeMap(() => this.moviesService.getGenreList()
        .pipe(
          map((response) => MoviesActions.genre_list_response(response.genres)),
          catchError((error) => of(MoviesActions.genre_movies_list_failure(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
