import isNumber from 'lodash.isnumber';
import { throwNumberFieldError } from '../error';
import request from '../request';

/**
 * People
 *
 * @export
 * @param {number} [personId]
 * @returns
 */
export default function people(personId?: number) {
  if (isNumber(personId)) {
    return {
      /**
       * Get the primary person details by id.
       * Supports append_to_response.
       *
       * @param {{ language?: string; append_to_response?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      details(query?: { language?: string; append_to_response?: string }) {
        return request('get', `/person/${personId}`, query);
      },
      /**
       * Get the movie credits for a person.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      movieCredits(query?: { language?: string }) {
        return request('get', `/person/${personId}/movie_credits`, query);
      },
      /**
       * Get the TV show credits for a person.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      tvCredits(query?: { language?: string }) {
        return request('get', `/person/${personId}/tv_credits`, query);
      },
      /**
       * Get the movie and TV credits together in a single response.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      combinedCredits(query?: { language?: string }) {
        return request('get', `/person/${personId}/combined_credits`, query);
      },
      /**
       * Get the external ids for a person. We currently support the following external sources.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      externalIds(query?: { language?: string }) {
        return request('get', `/person/{person_id}/external_ids`, query);
      },
      /**
       * Get the images for a person.
       *
       * @returns {AxiosPromise<any>}
       */
      images() {
        return request('get', `/person/${personId}/images`);
      },
      /**
       * Get the images that this person has been tagged in.
       *
       * @param {{ language?: string; page: number }} [query]
       * @returns {AxiosPromise<any>}
       */
      taggedImages(query?: { language?: string; page: number }) {
        return request('get', `/person/${personId}/tagged_images`, query);
      },
      /**
       * Get the changes for a person. By default only the last 24 hours are returned.
       *
       * @param {{ end_date?: string; page?: number; start_date?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      changes(query?: { end_date?: string; page?: number; start_date?: string }) {
        return request('get', `/person/${personId}/changes`, query);
      }
    };
  } else if (typeof personId === 'undefined') {
    return {
      /**
       * Get the most newly created person. This is a live response and will continuously change.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      latest(query?: { language?: string }) {
        return request('get', '/person/latest');
      },
      /**
       * Get the list of popular people on TMDb. This list updates daily.
       *
       * @param {{ language?: string; page?: number }} [query]
       * @returns {AxiosPromise<any>}
       */
      popular(query?: { language?: string; page?: number }) {
        return request('get', '/person/popular');
      }
    };
  } else {
    throwNumberFieldError('personId');
  }
}
