import isNumber from 'lodash.isnumber';
import { throwNumberFieldError } from '../error';
import request from '../request';

/**
 * Companies
 *
 * @export
 * @param {number} companyId
 * @returns
 */
export default function company(companyId: number) {
  if (isNumber(companyId)) {
    return {
      /**
       * Get a companies details by id.
       *
       * @returns {AxiosPromise<any>}
       */
      details() {
        return request('get', `/company/${companyId}`);
      },
      /**
       * Get the movies of a company by id.
       * We highly recommend using movie discover instead of this method as it is much more flexible.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      movies(query?: { language?: string }) {
        return request('get', `/company/${companyId}/movies`, query);
      }
    };
  } else {
    throwNumberFieldError('companyId');
  }
}
