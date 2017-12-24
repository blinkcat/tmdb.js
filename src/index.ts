import {
  account,
  certifications,
  changes,
  collection,
  company,
  credits,
  discover,
  genres,
  guestSession,
  keyword,
  list,
  movie,
  network,
  people,
  review,
  search,
  timezones,
  tv,
  tVEpisodes,
  tVSeasons
} from './api';
import request from './request';
import { externalSource } from './types';

const TMDB = {
  account,
  certifications,
  changes,
  collection,
  company,
  /**
   * Get the system wide configuration information.
   * Some elements of the API require some knowledge of this configuration data.
   * The purpose of this is to try and keep the actual API responses as light as possible.
   * It is recommended you cache this data within your application and check for updates every few days.
   *
   * @returns {AxiosPromise<any>}
   */
  configuration() {
    return request('get', '/configuration');
  },
  credits,
  discover,
  /**
   * The find method makes it easy to search for objects in our database by an external id. For instance, an IMDB ID.
   *
   * @param {string} externalId
   * @param {{ external_source: externalSource; language?: string }} query
   * @returns {AxiosPromise<any>}
   */
  find(externalId: string, query: { external_source: externalSource; language?: string }) {
    return request('get', `/find/${externalId}`, query);
  },
  genres,
  guestSession,
  /**
   * The the list of official jobs that are used on TMDb.
   *
   * @returns {AxiosPromise<any>}
   */
  jobs() {
    return request('get', '/job/list');
  },
  keyword,
  list,
  movie,
  network,
  people,
  review,
  search,
  timezones,
  tv,
  tVEpisodes,
  tVSeasons
};

export default TMDB;
