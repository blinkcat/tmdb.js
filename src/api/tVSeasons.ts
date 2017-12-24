import isNumber from 'lodash.isnumber';
import { throwNumberFieldError } from '../error';
import request from '../request';
/**
 * TV Seasons
 * 
 * @export
 * @param {number} tvId 
 * @param {number} [seasonNumber] 
 * @returns 
 */
export default function tVSeasons(tvId: number, seasonNumber?: number) {
  if (isNumber(tvId)) {
    if (isNumber(seasonNumber)) {
      return {
        /**
         * Get the TV season details by id.
         * Supports append_to_response.
         *
         * @param {{language?:string;append_to_response?:string}} [query]
         * @returns {AxiosPromise<any>}
         */
        details(query?: { language?: string; append_to_response?: string }) {
          return request('get', `/tv/${tvId}/season/${seasonNumber}`, query);
        },
        /**
         * Returns all of the user ratings for the season's episodes.
         *
         * @param {{language?:string;guest_session_id?:string;session_id?:string}} [query]
         * @returns {AxiosPromise<any>}
         */
        accountStates(query?: {
          language?: string;
          guest_session_id?: string;
          session_id?: string;
        }) {
          return request('get', `/tv/${tvId}/season/${seasonNumber}/account_states`, query);
        },
        /**
         * Get the credits for TV season.
         *
         * @param {{language?:string;}} [query]
         * @returns {AxiosPromise<any>}
         */
        credits(query?: { language?: string }) {
          return request('get', `/tv/${tvId}/season/${seasonNumber}/credits`, query);
        },
        /**
         * Get the external ids for a TV season.
         * We currently support the following external sources.
         *
         * @param {{ language?: string }} [query]
         * @returns {AxiosPromise<any>}
         */
        externalIds(query?: { language?: string }) {
          return request('get', `/tv/${tvId}/season/${seasonNumber}/external_ids`, query);
        },
        /**
         * Get the images that belong to a TV season.
         *
         * @param {{ language?: string }} [query]
         * @returns {AxiosPromise<any>}
         */
        images(query?: { language?: string }) {
          return request('get', `/tv/${tvId}/season/${seasonNumber}/images`, query);
        },
        /**
         * Get the videos that have been added to a TV season.
         *
         * @param {{ language?: string }} [query]
         * @returns {AxiosPromise<any>}
         */
        videos(query?: { language?: string }) {
          return request('get', `/tv/${tvId}/season/${seasonNumber}/videos`, query);
        }
      };
    } else if (typeof seasonNumber === 'undefined') {
      const seasonId = tvId;
      return {
        /**
         * Get the changes for a TV season.
         * By default only the last 24 hours are returned.
         *
         * @param {{ start_date?: string; end_date?: string; page?: number }} [query]
         * @returns {AxiosPromise<any>}
         */
        changes(query?: { start_date?: string; end_date?: string; page?: number }) {
          return request('get', `/tv/season/${seasonId}/changes`, query);
        }
      };
    } else {
      throwNumberFieldError('seasonNumber');
    }
  } else {
    throwNumberFieldError('tvId');
  }
}
