import isNumber from 'lodash.isnumber';
import { throwNumberFieldError } from '../error';
import request from '../request';
/**
 * Networks
 * 
 * @export
 * @param {number} networkId 
 * @returns 
 */
export default function network(networkId: number) {
  if (isNumber(networkId)) {
    return {
      /**
       * Get the details of a network.
       *
       * @param {number} networkId
       * @returns {AxiosPromise<any>}
       */
      details() {
        return request('get', `/network/${networkId}`);
      }
    };
  } else {
    throwNumberFieldError('networkId');
  }
}
