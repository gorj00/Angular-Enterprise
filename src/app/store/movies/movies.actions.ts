import { createActionGroup } from '@ngrx/store';
import { IMovie } from '../../models/movies.models'

enum actionTypes {
  GENRE_LIST_REQUEST = 'GENRE_LIST_REQUEST',
  GENRE_LIST_RESPONSE = 'GENRE_LIST_RESPONSE',
  GENRE_LIST_FAILURE = 'GENRE_LIST_FAILURE',

}

export const MoviesActions = createActionGroup({
  source: '[MOVIES]',
  events: {
    [actionTypes.GENRE_LIST_REQUEST]: (page: number, genreId: number) => ({ page, genreId }),
    [actionTypes.GENRE_LIST_RESPONSE]: (items: IMovie[], total: number) => ({ items, total }),
    [actionTypes.GENRE_LIST_FAILURE]: (error: any) => ({ error }),
  }
});
