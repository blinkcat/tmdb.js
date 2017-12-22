import request from '../request';
import { IaccountFavoriteBody, IaccountQuery, IaccountWatchlistBody } from '../types';
import { validateObj } from '../validate';

const account = {
  /**
   * Get your account details.
   *
   * @param {{ session_id: string }} query
   * @returns {AxiosPromise<any>}
   */
  details(query: { session_id: string }) {
    validateObj(query, ['session_id']);
    return request('get', '/account', query);
  },
  /**
   * Get all of the lists created by an account.
   * Will invlude private lists if you are the owner.
   *
   * @param {number} accountId
   * @param {{ language?: string; session_id: string; page?: number }} query
   * @returns {AxiosPromise<any>}
   */
  lists(accountId: number, query: { language?: string; session_id: string; page?: number }) {
    validateObj(query, ['session_id']);
    return request('get', `/account/${accountId}/lists`, query);
  },
  /**
   * Get the list of your favorite movies.
   *
   * @param {number} accountId
   * @param {IaccountQuery} query
   * @returns {AxiosPromise<any>}
   */
  favoriteMovies(accountId: number, query: IaccountQuery) {
    validateObj(query, ['session_id']);
    return request('get', `/account/${accountId}/favorite/movies`, query);
  },
  /**
   * Get the list of your favorite TV shows.
   *
   * @param {number} accountId
   * @param {IaccountQuery} query
   * @returns {AxiosPromise<any>}
   */
  favoriteTVShows(accountId: number, query: IaccountQuery) {
    validateObj(query, ['session_id']);
    return request('get', `/account/${accountId}/favorite/tv`, query);
  },
  /**
   * This method allows you to mark a movie or TV show as a favorite item.
   *
   * @param {number} accountId
   * @param {{ session_id: string }} query
   * @param {IaccountFavoriteBody} body
   * @returns {AxiosPromise<any>}
   */
  markAsFavorite(accountId: number, query: { session_id: string }, body: IaccountFavoriteBody) {
    validateObj(query, ['session_id']);
    validateObj(body, ['media_type', 'media_id', 'favorite']);
    return request('post', `/account/${accountId}/favorite`, query, body);
  },
  /**
   * Get a list of all the movies you have rated.
   *
   * @param {number} accountId
   * @param {IaccountQuery} query
   * @returns {AxiosPromise<any>}
   */
  ratedMovies(accountId: number, query: IaccountQuery) {
    validateObj(query, ['session_id']);
    return request('get', `/account/${accountId}/rated/movies`, query);
  },
  /**
   * Get a list of all the TV shows you have rated.
   *
   * @param {number} accountId
   * @param {IaccountQuery} query
   * @returns {AxiosPromise<any>}
   */
  ratedTVShows(accountId: number, query: IaccountQuery) {
    validateObj(query, ['session_id']);
    return request('get', `/account/${accountId}/rated/tv`, query);
  },
  /**
   * Get a list of all the TV episodes you have rated.
   *
   * @param {number} accountId
   * @param {IaccountQuery} query
   * @returns {AxiosPromise<any>}
   */
  ratedTVEpisodes(accountId: number, query: IaccountQuery) {
    validateObj(query, ['session_id']);
    return request('get', `/account/${accountId}/rated/tv/episodes`, query);
  },
  /**
   * Get a list of all the movies you have added to your watchlist.
   *
   * @param {number} accountId
   * @param {IaccountQuery} query
   * @returns {AxiosPromise<any>}
   */
  movieWatchlist(accountId: number, query: IaccountQuery) {
    validateObj(query, ['session_id']);
    return request('get', `/account/${accountId}/watchlist/movies`, query);
  },
  /**
   * Get a list of all the TV shows you have added to your watchlist.
   *
   * @param {number} accountId
   * @param {IaccountQuery} query
   * @returns {AxiosPromise<any>}
   */
  tVShowWatchlist(accountId: number, query: IaccountQuery) {
    validateObj(query, ['session_id']);
    return request('get', `/account/${accountId}/watchlist/tv`, query);
  },
  /**
   * Add a movie or TV show to your watchlist.
   *
   * @param {number} accountId
   * @param {{ session_id: string }} query
   * @param {IaccountWatchlistBody} body
   * @returns {AxiosPromise<any>}
   */
  addToWatchlist(accountId: number, query: { session_id: string }, body: IaccountWatchlistBody) {
    validateObj(query, ['session_id']);
    validateObj(query, ['media_type', 'media_id', 'watchlist']);
    return request('post', `/account/${accountId}/watchlist`, query, body);
  }
};

export default account;
