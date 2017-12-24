import isNumber from 'lodash.isnumber';
import { throwNumberFieldError } from '../error';
import request from '../request';
import { validateObj } from '../validate';

/**
 * TV Episodes
 * 
 * @export
 * @param {number} tvId 
 * @param {number} seasonNumber 
 * @param {number} episodeNumber 
 * @returns 
 */
export default function tVEpisodes(tvId: number, seasonNumber: number, episodeNumber: number) {
  if (isNumber(tvId)) {
    if (isNumber(seasonNumber) && isNumber(episodeNumber)) {
      return {
        /**
         * Get the TV episode details by id.
         * Supports append_to_response.
         *
         * @param {{ language?: string; append_to_response?: string }} [query]
         * @returns {AxiosPromise<any>}
         */
        details(query?: { language?: string; append_to_response?: string }) {
          return request(
            'get',
            `/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}`,
            query
          );
        },
        /**
         * Get your rating for a episode.
         *
         * @param {{ guest_session_id?: string; session_id?: string }} [query]
         * @returns {AxiosPromise<any>}
         */
        accountStates(query?: { guest_session_id?: string; session_id?: string }) {
          return request(
            'get',
            `/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/account_states`,
            query
          );
        },
        /**
         * Get the credits (cast, crew and guest stars) for a TV episode.
         *
         * @returns {AxiosPromise<any>}
         */
        credits() {
          return request(
            'get',
            `/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/credits`
          );
        },
        /**
         * Get the external ids for a TV episode. We currently support the following external sources.
         *
         * @returns {AxiosPromise<any>}
         */
        externalIds() {
          return request(
            'get',
            `/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/external_ids`
          );
        },
        /**
         * Get the images that belong to a TV episode.
         *
         * @returns {AxiosPromise<any>}
         */
        images() {
          return request(
            'get',
            `/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/images`
          );
        },
        /**
         * Rate a TV episode.
         * A valid session or guest session ID is required.
         *
         * @param {{ guest_session_id?: string; session_id?: string }} query
         * @param {{ value: number }} body
         * @returns {AxiosPromise<any>}
         */
        rate(query: { guest_session_id?: string; session_id?: string }, body: { value: number }) {
          validateObj(body, ['value']);
          return request(
            'post',
            `/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/rating`,
            query,
            body
          );
        },
        /**
         * Remove your rating for a TV episode.
         * A valid session or guest session ID is required.
         *
         * @param {{ guest_session_id?: string; session_id?: string }} query
         * @returns {AxiosPromise<any>}
         */
        deleteRating(query: { guest_session_id?: string; session_id?: string }) {
          return request(
            'delete',
            `/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/rating`,
            query
          );
        },
        /**
         * Get the videos that have been added to a TV episode.
         *
         * @param {{ language?: string }} [query]
         * @returns {AxiosPromise<any>}
         */
        videos(query?: { language?: string }) {
          return request(
            'get',
            `/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}/videos`,
            query
          );
        }
      };
    } else if (typeof seasonNumber === 'undefined' && typeof episodeNumber === 'undefined') {
      const episodeId = tvId;
      return {
        /**
         * Get the changes for a TV episode.
         * By default only the last 24 hours are returned.
         *
         * @param {{ start_date?: string; end_date?: string; page?: number }} [query]
         * @returns {AxiosPromise<any>}
         */
        changes(query?: { start_date?: string; end_date?: string; page?: number }) {
          return request('get', `/tv/episode/${episodeId}/changes`, query);
        }
      };
    } else {
      if (!isNumber(seasonNumber)) {
        throwNumberFieldError('seasonNumber');
      }
      if (!isNumber(episodeNumber)) {
        throwNumberFieldError('episodeNumber');
      }
    }
  } else {
    throwNumberFieldError('tvId');
  }
}
