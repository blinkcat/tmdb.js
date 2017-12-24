import { throwStringFieldError } from '../error';
import request from '../request';
import { IguestSessionQuery } from '../types';

/**
 * Guest Sessions
 *
 * @export
 * @param {string} guestSessionId
 * @returns
 */
export default function guestSession(guestSessionId: string) {
  if (typeof guestSessionId === 'string') {
    return {
      /**
       * Get the rated movies for a guest session.
       *
       * @param {IguestSessionQuery} [query]
       * @returns {AxiosPromise<any>}
       */
      ratedMovies(query?: IguestSessionQuery) {
        return request('get', `/guest_session/${guestSessionId}/rated/movies`, query);
      },
      /**
       * Get the rated TV shows for a guest session.
       *
       * @param {IguestSessionQuery} [query]
       * @returns {AxiosPromise<any>}
       */
      ratedTVShows(query?: IguestSessionQuery) {
        return request('get', `/guest_session/${guestSessionId}/rated/tv`);
      },
      /**
       * Get the rated TV episodes for a guest session.
       *
       * @param {IguestSessionQuery} [query]
       * @returns {AxiosPromise<any>}
       */
      ratedTVEpisodes(query?: IguestSessionQuery) {
        return request('get', `/guest_session/${guestSessionId}/rated/tv/episodes`);
      }
    };
  } else {
    throwStringFieldError('guestSessionId');
  }
}
