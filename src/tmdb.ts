import qs from 'qs';
import { httpMethod, IbodyObj, IqueryObj } from './types';

export default class TMDB {
  public static baseURL = 'https://api.themoviedb.org/3';
  public static imgBaseURL = 'https://image.tmdb.org/t/p';
  public static language = 'en-US';
  private apiKey: string;
  private sessionId: string;
  private guestSessionId: string;
  // private postOrDeleteDefaultContentType = 'application/json;charset=utf-8';
  // private request: AxiosInstance;

  constructor(apiKey: string) {
    if (!apiKey && typeof apiKey === 'string') {
      this.apiKey = apiKey;
    } else {
      throw Error('you should set a non-empty string');
    }
  }

  public movies = {
    /**
     * Get the primary information about a movie.
     *
     * @param {number} movieId
     * @returns {AxiosPromise<any>}
     */
    details(movieId: number): AxiosPromise<any> {
      // return axios.get(`/movie/${movieId}`);
      return this.
    }
  };
}
