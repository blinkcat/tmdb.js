import isNumber from 'lodash.isnumber';
import { throwNumberFieldError } from '../error';
import request from '../request';

/**
 * Collections
 *
 * @export
 * @param {number} collectionId
 * @returns
 */
export default function collection(collectionId: number) {
  if (isNumber(collectionId)) {
    return {
      /**
       * Get collection details by id.
       *
       * @param {{ language: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      details(query?: { language: string }) {
        return request('get', `/collection/${collectionId}`, query);
      },
      /**
       * Get the images for a collection by id.
       *
       * @param {{ language: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      images(query?: { language: string }) {
        return request('get', `/collection/${collectionId}/images`, query);
      }
    };
  } else {
    throwNumberFieldError('collectionId');
  }
}
