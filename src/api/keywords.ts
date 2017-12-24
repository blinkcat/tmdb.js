import request from '../request';

const keywords = {
  /**
   * Get Details
   *
   * @param {number} keywordId
   * @returns {AxiosPromise<any>}
   */
  details(keywordId: number) {
    return request('get', `/keyword/${keywordId}`);
  },
  /**
   * Get the movies that belong to a keyword.
   *
   * @param {number} keywordId
   * @returns {AxiosPromise<any>}
   */
  movies(keywordId: number) {
    return request('get', `/keyword/${keywordId}/movies`);
  }
};

export default keywords;
