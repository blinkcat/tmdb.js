import request from '../request';

const company = {
  /**
   * Get a companies details by id.
   *
   * @param {number} companyId
   * @returns {AxiosPromise<any>}
   */
  details(companyId: number) {
    return request('get', `/company/${companyId}`);
  },
  /**
   * Get the movies of a company by id.
   * We highly recommend using movie discover instead of this method as it is much more flexible.
   *
   * @param {number} companyId
   * @param {{ language?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  movies(companyId: number, query?: { language?: string }) {
    return request('get', `/company/${companyId}/movies`, query);
  }
};

export default company;
