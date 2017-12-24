import isNumber from 'lodash.isnumber';
import { throwNumberFieldError } from '../error';
import request from '../request';
/**
 * Reviews
 * 
 * @export
 * @param {number} reviewId 
 * @returns 
 */
export default function network(reviewId: number) {
  if (isNumber(reviewId)) {
    return {
      /**
       * Get the details of a review.
       *
       * @param {number} reviewId
       * @returns {AxiosPromise<any>}
       */
      details() {
        return request('get', `/review/${reviewId}`);
      }
    };
  } else {
    throwNumberFieldError('reviewId');
  }
}
