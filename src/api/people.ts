import request from '../request';

const people = {
  /**
   * Get the primary person details by id.
   * Supports append_to_response.
   *
   * @param {number} personId
   * @param {{ language?: string; append_to_response?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  details(personId: number, query?: { language?: string; append_to_response?: string }) {
    return request('get', `/person/${personId}`, query);
  },
  /**
   * Get the movie credits for a person.
   *
   * @param {number} personId
   * @param {{ language?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  movieCredits(personId: number, query?: { language?: string }) {
    return request('get', `/person/${personId}/movie_credits`, query);
  },
  /**
   * Get the TV show credits for a person.
   *
   * @param {number} personId
   * @param {{ language?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  tvCredits(personId: number, query?: { language?: string }) {
    return request('get', `/person/${personId}/tv_credits`, query);
  },
  /**
   * Get the movie and TV credits together in a single response.
   *
   * @param {number} personId
   * @param {{ language?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  combinedCredits(personId: number, query?: { language?: string }) {
    return request('get', `/person/${personId}/combined_credits`, query);
  },
  /**
   * Get the external ids for a person. We currently support the following external sources.
   *
   * @param {number} personId
   * @param {{ language?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  externalIds(personId: number, query?: { language?: string }) {
    return request('get', `/person/{person_id}/external_ids`, query);
  },
  /**
   * Get the images for a person.
   *
   * @param {number} personId
   * @returns {AxiosPromise<any>}
   */
  images(personId: number) {
    return request('get', `/person/${personId}/images`);
  },
  /**
   * Get the images that this person has been tagged in.
   *
   * @param {number} personId
   * @param {{ language?: string; page: number }} [query]
   * @returns {AxiosPromise<any>}
   */
  taggedImages(personId: number, query?: { language?: string; page: number }) {
    return request('get', `/person/${personId}/tagged_images`, query);
  },
  /**
   * Get the changes for a person. By default only the last 24 hours are returned.
   *
   * @param {number} personId
   * @param {{ end_date?: string; page?: number; start_date?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  changes(personId: number, query?: { end_date?: string; page?: number; start_date?: string }) {
    return request('get', `/person/${personId}/changes`, query);
  },
  /**
   * Get the most newly created person. This is a live response and will continuously change.
   *
   * @param {{ language?: string }} [query]
   * @returns {AxiosPromise<any>}
   */
  latest(query?: { language?: string }) {
    return request('get', '/person/latest');
  },
  /**
   * Get the list of popular people on TMDb. This list updates daily.
   *
   * @param {{ language?: string; page?: number }} [query]
   * @returns {AxiosPromise<any>}
   */
  popular(query?: { language?: string; page?: number }) {
    return request('get', '/person/popular');
  }
};

export default people;
