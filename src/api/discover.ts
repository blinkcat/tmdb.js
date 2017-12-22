import request from '../request';
import { IdiscoverMovie, IdiscoverTV } from '../types';

const discover = {
  /**
   * Discover movies by different types of data like average rating, number of votes, genres and certifications.
   *
   * @param {IdiscoverMovie} [query]
   * @returns {AxiosPromise<any>}
   */
  movie(query?: IdiscoverMovie) {
    return request('get', '/discover/movie');
  },
  /**
   * Discover TV shows by different types of data like average rating,
   * number of votes, genres, the network they aired on and air dates.
   *
   * @param {IdiscoverTV} [query]
   * @returns {AxiosPromise<any>}
   */
  tv(query?: IdiscoverTV) {
    return request('get', '/discover/tv');
  }
};

export default discover;
