import { createActionGroup, emptyProps } from '@ngrx/store';
import { IMovie, IGenre } from '../../models/movies.models'

enum actionTypes {
  GENRE_MOVIES_LIST_REQUEST = 'GENRE_MOVIES_LIST_REQUEST',
  GENRE_MOVIES_LIST_RESPONSE = 'GENRE_MOVIES_LIST_RESPONSE',
  GENRE_MOVIES_LIST_FAILURE = 'GENRE_MOVIES_LIST_FAILURE',

  GENRE_LIST_REQUEST = 'GENRE_LIST_REQUEST',
  GENRE_LIST_RESPONSE = 'GENRE_LIST_RESPONSE',
  GENRE_LIST_FAILURE = 'GENRE_LIST_FAILURE',

}

export const MoviesActions = createActionGroup({
  source: '[MOVIES]',
  events: {
    [actionTypes.GENRE_MOVIES_LIST_REQUEST]: (page: number, genreId: number) => ({ page, genreId }),
    [actionTypes.GENRE_MOVIES_LIST_RESPONSE]: (items: IMovie[], total: number) => ({ items, total }),
    [actionTypes.GENRE_MOVIES_LIST_FAILURE]: (error: any) => ({ error }),

    [actionTypes.GENRE_LIST_REQUEST]: emptyProps(),
    [actionTypes.GENRE_LIST_RESPONSE]: (items: IGenre[]) => ({ items }),
    [actionTypes.GENRE_LIST_FAILURE]: (error: any) => ({ error }),
  }
});
