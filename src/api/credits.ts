import request from '../request';

const credits = {
  /**
   * Get a movie or TV credit details by id.
   *
   * @param {string} creditId
   * @returns {AxiosPromise<any>}
   */
  details(creditId: string) {
    return request('get', `/credit/${creditId}`);
  }
};

export default credits;
