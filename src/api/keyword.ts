import isNumber from 'lodash.isnumber';
import { throwNumberFieldError } from '../error';
import request from '../request';

export default function keyword(keywordId: number) {
  if (isNumber(keywordId)) {
    return {
      /**
       * Get Details
       *
       * @returns {AxiosPromise<any>}
       */
      details() {
        return request('get', `/keyword/${keywordId}`);
      },
      /**
       * Get the movies that belong to a keyword.
       *
       * @returns {AxiosPromise<any>}
       */
      movies() {
        return request('get', `/keyword/${keywordId}/movies`);
      }
    };
  } else {
    throwNumberFieldError('keywordId');
  }
}
