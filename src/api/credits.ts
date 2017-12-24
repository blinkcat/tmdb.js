import { throwStringFieldError } from '../error';
import request from '../request';

/**
 * Credits
 *
 * @export
 * @param {string} creditId
 * @returns
 */
export default function credit(creditId: string) {
  if (typeof creditId === 'string') {
    return {
      /**
       * Get a movie or TV credit details by id.
       *
       * @returns {AxiosPromise<any>}
       */
      details() {
        return request('get', `/credit/${creditId}`);
      }
    };
  } else {
    throwStringFieldError('creditId');
  }
}
