import request from '../request';

const search = {
  /**
   * Search for companies.
   *
   * @param {{ query: string; page?: number }} query
   * @returns {AxiosPromise<any>}
   */
  companies(query: { query: string; page?: number }) {
    return request('get', '/search/company', query);
  },
  /**
   * Search for collections.
   *
   * @param {{ query: string; language?: string; page?: number }} query
   * @returns {AxiosPromise<any>}
   */
  collections(query: { query: string; language?: string; page?: number }) {
    return request('get', '/search/collection', query);
  },
  /**
   * Search for keywords.
   *
   * @param {{ query: string; page?: number }} query
   * @returns {AxiosPromise<any>}
   */
  keywords(query: { query: string; page?: number }) {
    return request('get', '/search/keyword', query);
  },
  /**
   * Search for movies.
   *
   * @param {{
   *     query: string;
   *     language?: string;
   *     page?: number;
   *     include_adult?: boolean;
   *     region?: string;
   *     year?: number;
   *     primary_release_year?: number;
   *   }} query
   * @returns {AxiosPromise<any>}
   */
  movies(query: {
    query: string;
    language?: string;
    page?: number;
    include_adult?: boolean;
    region?: string;
    year?: number;
    primary_release_year?: number;
  }) {
    return request('get', '/search/movie', query);
  },
  /**
   * Search multiple models in a single request.
   * Multi search currently supports searching for movies, tv shows and people in a single request.
   *
   * @param {{
   *     language?: string;
   *     query: string;
   *     page: number;
   *     include_adult?: boolean;
   *     region?: string;
   *   }} query
   * @returns {AxiosPromise<any>}
   */
  multi(query: {
    language?: string;
    query: string;
    page: number;
    include_adult?: boolean;
    region?: string;
  }) {
    return request('get', '/search/multi', query);
  },
  /**
   * Search for people.
   *
   * @param {{
   *     language?: string;
   *     query: string;
   *     page?: number;
   *     include_adult?: boolean;
   *     region?: string;
   *   }} query
   * @returns {AxiosPromise<any>}
   */
  people(query: {
    language?: string;
    query: string;
    page?: number;
    include_adult?: boolean;
    region?: string;
  }) {
    return request('get', '/search/person', query);
  },
  /**
   * Search for a TV show.
   *
   * @param {{
   *     language?: string;
   *     query: string;
   *     page?: number;
   *     first_air_date_year?: number;
   *   }} query
   * @returns {AxiosPromise<any>}
   */
  tVshows(query: {
    language?: string;
    query: string;
    page?: number;
    first_air_date_year?: number;
  }) {
    return request('get', '/search/tv', query);
  }
};

export default search;
