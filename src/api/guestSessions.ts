import request from '../request';
import { guestSessionsSortBy } from '../types';

const guestSessions = {
  /**
   * Get the rated movies for a guest session.
   *
   * @param {string} guestSessionId
   * @param {{ language?: string; sort_by?: guestSessionsSortBy }} [query]
   * @returns {AxiosPromise<any>}
   */
  ratedMovies(
    guestSessionId: string,
    query?: { language?: string; sort_by?: guestSessionsSortBy }
  ) {
    return request('get', `/guest_session/${guestSessionId}/rated/movies`, query);
  },
  /**
   * Get the rated TV shows for a guest session.
   *
   * @param {string} guestSessionId
   * @param {{ language?: string; sort_by?: guestSessionsSortBy }} [query]
   * @returns {AxiosPromise<any>}
   */
  ratedTVShows(
    guestSessionId: string,
    query?: { language?: string; sort_by?: guestSessionsSortBy }
  ) {
    return request('get', `/guest_session/${guestSessionId}/rated/tv`);
  },
  /**
   * Get the rated TV episodes for a guest session.
   *
   * @param {string} guestSessionId
   * @param {{ language?: string; sort_by?: guestSessionsSortBy }} [query]
   * @returns {AxiosPromise<any>}
   */
  ratedTVEpisodes(
    guestSessionId: string,
    query?: { language?: string; sort_by?: guestSessionsSortBy }
  ) {
    return request(
      'get',
      `/guest_session/${guestSessionId}/rated/tv/episodes
    `
    );
  }
};

export default guestSessions;
