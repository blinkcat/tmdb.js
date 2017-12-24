import request from '../request';

const genres = {
  /**
   * Get the list of official genres for movies.
   *
   * @param {{ language?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  movieList(query?: { language?: string }) {
    return request('get', '/genre/movie/list', query);
  },
  /**
   * Get the list of official genres for TV shows.
   *
   * @param {{ language?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  tvList(query?: { language?: string }) {
    return request('get', '/genre/tv/list', query);
  }
};

export default genres;
