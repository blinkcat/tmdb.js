import request from '../request';

const collections = {
  /**
   * Get collection details by id.
   *
   * @param {number} collectionId
   * @param {{ language: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  details(collectionId: number, query?: { language: string }) {
    return request('get', `/collection/${collectionId}`, query);
  },
  /**
   * Get the images for a collection by id.
   *
   * @param {number} collectionId
   * @param {{ language: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  images(collectionId: number, query?: { language: string }) {
    return request('get', `/collection/${collectionId}/images`);
  }
};

export default collections;
