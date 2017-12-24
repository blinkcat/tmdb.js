import request from '../request';
import { IchangesQuery } from '../types';

const changes = {
  /**
   * Get a list of all of the movie ids that have been changed in the past 24 hours.
   *
   * @param {IchangesQuery} [query]
   * @returns {AxiosPromise<any>}
   */
  movie(query?: IchangesQuery) {
    return request('get', '/movie/changes');
  },
  /**
   * Get a list of all of the TV show ids that have been changed in the past 24 hours.
   *
   * @param {IchangesQuery} [query]
   * @returns {AxiosPromise<any>}
   */
  tv(query?: IchangesQuery) {
    return request('get', '/tv/changes');
  },
  /**
   * Get a list of all of the person ids that have been changed in the past 24 hours.
   *
   * @param {IchangesQuery} [query]
   * @returns {AxiosPromise<any>}
   */
  person(query?: IchangesQuery) {
    return request('get', '/person/changes');
  }
};

export default changes;
