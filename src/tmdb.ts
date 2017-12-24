import {
  account,
  certifications,
  changes,
  collections,
  company,
  credits,
  discover,
  genres,
  guestSessions,
  keywords,
  movies,
  people,
  search
} from './api';
import request from './request';
import { externalSource } from './types';

const TMDB = {
  account,
  certifications,
  changes,
  collections,
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
  guestSessions,
  /**
   * The the list of official jobs that are used on TMDb.
   *
   * @returns {AxiosPromise<any>}
   */
  jobs() {
    return request('get', '/job/list');
  },
  keywords,
  movies,
  networks: {
    /**
     * Get the details of a network.
     *
     * @param {number} networkId
     * @returns {AxiosPromise<any>}
     */
    details(networkId: number) {
      return request('get', `/network/${networkId}`);
    }
  },
  people,
  reviews: {
    /**
     * Get Details
     *
     * @param {string} reviewId
     * @returns {AxiosPromise<any>}
     */
    details(reviewId: string) {
      return request('get', `/review/${reviewId}`);
    }
  },
  search
};

export default TMDB;
