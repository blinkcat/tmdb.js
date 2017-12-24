import isNumber from 'lodash.isnumber';
import { throwNumberOrUndefinedFieldError } from '../error';
import request from '../request';
import { validateObj } from '../validate';

/**
 * TV
 *
 * @export
 * @param {number} tvId
 * @returns
 */
export default function tv(tvId: number) {
  if (isNumber(tvId)) {
    return {
      /**
       * Get the primary TV show details by id.
       * Supports append_to_response.
       *
       * @param {{ language?: string; append_to_response?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      details(query?: { language?: string; append_to_response?: string }) {
        return request('get', `/tv/${tvId}`, query);
      },
      /**
       * Grab the following account states for a session:
       * - TV show rating
       * - If it belongs to your watchlist
       * - If it belongs to your favourite list
       *
       * @param {{ language?: string; guest_session_id?: string; session_id?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      accountStates(query?: { language?: string; guest_session_id?: string; session_id?: string }) {
        return request('get', `/tv/${tvId}/account_states`, query);
      },
      /**
       * Returns all of the alternative titles for a TV show.
       *
       * @param {{language?:string}} [query]
       * @returns {AxiosPromise<any>}
       */
      alternativeTitles(query?: { language?: string }) {
        return request('get', `/tv/${tvId}/alternative_titles`, query);
      },
      /**
       * Get the changes for a TV show. By default only the last 24 hours are returned.
       *
       * @param {{ start_date?: string; end_date?: string; page?: number }} [query]
       * @returns {AxiosPromise<any>}
       */
      changes(query?: { start_date?: string; end_date?: string; page?: number }) {
        return request('get', `/tv/${tvId}/changes`, query);
      },
      /**
       * Get the list of content ratings (certifications) that have been added to a TV show.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      contentRatings(query?: { language?: string }) {
        return request('get', `/tv/${tvId}/content_ratings`, query);
      },
      /**
       * Get the credits (cast and crew) that have been added to a TV show.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      credits(query?: { language?: string }) {
        return request('get', `/tv/${tvId}/credits`, query);
      },
      /**
       * Get the external ids for a TV show. We currently support the following external sources.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      externalIds(query?: { language?: string }) {
        return request('get', `/tv/${tvId}/external_ids`, query);
      },
      /**
       * Get the images that belong to a TV show.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      images(query?: { language?: string }) {
        return request('get', `/tv/${tvId}/images`, query);
      },
      /**
       * Get the keywords that have been added to a TV show.
       *
       * @returns {AxiosPromise<any>}
       */
      keywords() {
        return request('get', `/tv/${tvId}/keywords`);
      },
      /**
       * Get the list of TV show recommendations for this item.
       *
       * @param {{ language?: string; page?: number }} [query]
       * @returns {AxiosPromise<any>}
       */
      recommendations(query?: { language?: string; page?: number }) {
        return request('get', `/tv/${tvId}/images`, query);
      },
      /**
       * Get a list of seasons or episodes that have been screened in a film festival or theatre.
       *
       * @returns {AxiosPromise<any>}
       */
      screenedTheatrically() {
        return request('get', `/tv/${tvId}/screened_theatrically`);
      },
      /**
       * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
       *
       * @param {{ language?: string; page?: number }} [query]
       * @returns {AxiosPromise<any>}
       */
      similar(query?: { language?: string; page?: number }) {
        return request('get', `/tv/${tvId}/similar`, query);
      },
      /**
       * Get a list of the translations that exist for a TV show.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      translations(query?: { language?: string }) {
        return request('get', `/tv/${tvId}/translations`, query);
      },
      /**
       * Get the videos that have been added to a TV show.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      videos(query?: { language?: string }) {
        return request('get', `/tv/${tvId}/videos`, query);
      },
      /**
       * A valid session or guest session ID is required.
       *
       * @param {{ guest_session_id?: string; session_id?: string }} query
       * @param {{ value: number }} body
       * @returns {AxiosPromise<any>}
       */
      rate(query: { guest_session_id?: string; session_id?: string }, body: { value: number }) {
        validateObj(body, ['value']);
        return request('post', `/tv/${tvId}/rating`, query, body);
      },
      /**
       * Remove your rating for a TV show.
       * A valid session or guest session ID is required.
       *
       * @param {{ guest_session_id?: string; session_id?: string }} query
       * @returns {AxiosPromise<any>}
       */
      deleteRating(query: { guest_session_id?: string; session_id?: string }) {
        return request('delete', `/tv/${tvId}/rating`, query);
      }
    };
  } else if (typeof tvId === 'undefined') {
    return {
      /**
       * Get the most newly created TV show.
       * This is a live response and will continuously change.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      latest(query?: { language?: string }) {
        return request('get', '/tv/latest', query);
      },
      /**
       * Get a list of TV shows that are airing today.
       * This query is purely day based as we do not currently support airing times.
       *
       * @param {{ language?: string; page?: number }} [query]
       * @returns {AxiosPromise<any>}
       */
      airingToday(query?: { language?: string; page?: number }) {
        return request('get', '/tv/airing_today', query);
      },
      /**
       * Get a list of shows that are currently on the air.
       *
       * @param {{ language?: string; page?: number }} [query]
       * @returns {AxiosPromise<any>}
       */
      onTheAir(query?: { language?: string; page?: number }) {
        return request('get', '/tv/on_the_air', query);
      },
      /**
       * Get a list of the current popular TV shows on TMDb.
       * This list updates daily.
       *
       * @param {{ language?: string; page?: number }} [query]
       * @returns
       */
      popular(query?: { language?: string; page?: number }) {
        return request('get', '/tv/popular', query);
      },
      /**
       * Get a list of the top rated TV shows on TMDb.
       *
       * @param {{ language?: string; page?: number }} [query]
       * @returns
       */
      topRated(query?: { language?: string; page?: number }) {
        return request('get', '/tv/top_rated', query);
      }
    };
  } else {
    throwNumberOrUndefinedFieldError('tvId');
  }
}
