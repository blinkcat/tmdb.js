import axios, { AxiosInstance, AxiosPromise } from 'axios';
import request from './request';
import { IaccountFavoriteBody, IaccountQuery, IaccountWatchlistBody } from './types';

//   private sessionId: string;
//   private guestSessionId: string;

const TMDB = {
  account: {
    /**
     * Get your account details.
     *
     * @param {{ session_id: string }} query
     * @returns {AxiosPromise<any>}
     */
    details(query: { session_id: string }) {
      return request('get', '/account', query);
    },
    /**
     * Get all of the lists created by an account. Will invlude private lists if you are the owner.
     *
     * @param {number} accountId
     * @param {{ language?: string; session_id: string; page?: number }} query
     * @returns {AxiosPromise<any>}
     */
    lists(accountId: number, query: { language?: string; session_id: string; page?: number }) {
      return request('get', `/account/${accountId}/lists`, query);
    },
    /**
     * Get the list of your favorite movies.
     *
     * @param {number} accountId
     * @param {IaccountQuery} query
     * @returns {AxiosPromise<any>}
     */
    favoriteMovies(accountId: number, query: IaccountQuery) {
      return request('get', `/account/${accountId}/favorite/movies`, query);
    },
    /**
     * Get the list of your favorite TV shows.
     *
     * @param {number} accountId
     * @param {IaccountQuery} query
     * @returns {AxiosPromise<any>}
     */
    favoriteTVShows(accountId: number, query: IaccountQuery) {
      return request('get', `/account/${accountId}/favorite/tv`, query);
    },
    /**
     * This method allows you to mark a movie or TV show as a favorite item.
     *
     * @param {number} accountId
     * @param {{ session_id: string }} query
     * @param {IaccountFavoriteBody} body
     * @returns {AxiosPromise<any>}
     */
    markAsFavorite(accountId: number, query: { session_id: string }, body: IaccountFavoriteBody) {
      return request('post', `/account/${accountId}/favorite`, query, body);
    },
    /**
     * Get a list of all the movies you have rated.
     *
     * @param {number} accountId
     * @param {IaccountQuery} query
     * @returns {AxiosPromise<any>}
     */
    ratedMovies(accountId: number, query: IaccountQuery) {
      return request('get', `/account/${accountId}/rated/movies`, query);
    },
    /**
     * Get a list of all the TV shows you have rated.
     *
     * @param {number} accountId
     * @param {IaccountQuery} query
     * @returns {AxiosPromise<any>}
     */
    ratedTVShows(accountId: number, query: IaccountQuery) {
      return request('get', `/account/${accountId}/rated/tv`, query);
    },
    /**
     * Get a list of all the TV episodes you have rated.
     *
     * @param {number} accountId
     * @param {IaccountQuery} query
     * @returns {AxiosPromise<any>}
     */
    ratedTVEpisodes(accountId: number, query: IaccountQuery) {
      return request('get', `/account/${accountId}/rated/tv/episodes`, query);
    },
    /**
     * Get a list of all the movies you have added to your watchlist.
     *
     * @param {number} accountId
     * @param {IaccountQuery} query
     * @returns {AxiosPromise<any>}
     */
    movieWatchlist(accountId: number, query: IaccountQuery) {
      return request('get', `/account/${accountId}/watchlist/movies`, query);
    },
    /**
     * Get a list of all the TV shows you have added to your watchlist.
     *
     * @param {number} accountId
     * @param {IaccountQuery} query
     * @returns {AxiosPromise<any>}
     */
    tVShowWatchlist(accountId: number, query: IaccountQuery) {
      return request('get', `/account/${accountId}/watchlist/tv`, query);
    },
    /**
     * Add a movie or TV show to your watchlist.
     *
     * @param {number} accountId
     * @param {{ session_id: string }} query
     * @param {IaccountWatchlistBody} body
     * @returns {AxiosPromise<any>}
     */
    addToWatchlist(accountId: number, query: { session_id: string }, body: IaccountWatchlistBody) {
      return request('post', `/account/${accountId}/watchlist`, query, body);
    }
  },
  movies: {
    /**
     * Get the primary information about a movie.
     * Supports append_to_response.
     *
     * @param {number} movieId
     * @param {{ language?: string; append_to_response?: string }} [query]
     * @returns {AxiosPromise<any>}
     */
    details(movieId: number, query?: { language?: string; append_to_response?: string }) {
      return request('get', `/movie/${movieId}`, query);
    },
    /**
     * Grab the following account states for a session:
     * - Movie rating
     * - If it belongs to your watchlist
     * - If it belongs to your favourite list
     *
     * @param {number} movieId
     * @param {{ session_id: string; guest_session_id?: string }} query
     * @returns {AxiosPromise<any>}
     */
    accountStates(movieId: number, query: { session_id: string; guest_session_id?: string }) {
      return request('get', `/movie/${movieId}/account_states`, query);
    },
    /**
     * Get all of the alternative titles for a movie.
     *
     * @param {number} movieId
     * @param {{ country?: string }} [query]
     * @returns {AxiosPromise<any>}
     */
    alternativeTitles(movieId: number, query?: { country?: string }) {
      return request('get', `/movie/${movieId}/alternative_titles`, query);
    },
    /**
     * Get the changes for a movie. By default only the last 24 hours are returned.
     * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
     *
     * @param {number} movieId
     * @param {{ start_date?: string; end_date?: string; page?: number }} [query]
     * @returns {AxiosPromise<any>}
     */
    changes(movieId: number, query?: { start_date?: string; end_date?: string; page?: number }) {
      return request('get', `/movie/${movieId}/changes`, query);
    },
    /**
     * Get the cast and crew for a movie.
     *
     * @param {number} movieId
     * @returns {AxiosPromise<any>}
     */
    credits(movieId: number) {
      return request('get', `/movie/${movieId}/credits`);
    },
    /**
     * Get the images that belong to a movie.
     *
     * @param {number} movieId
     * @param {{ language?: string; include_image_language?: string }} [query]
     * @returns {AxiosPromise<any>}
     */
    images(movieId: number, query?: { language?: string; include_image_language?: string }) {
      return request('get', `/movie/${movieId}/images`, query);
    },
    /**
     * Get the keywords that have been added to a movie.
     *
     * @param {number} movieId
     * @returns {AxiosPromise<any>}
     */
    keywords(movieId: number) {
      return request('get', `/movie/${movieId}/keywords`);
    },
    /**
     * Get the release date along with the certification for a movie.
     * Release dates support different types:
     * - Premiere
     * - Theatrical (limited)
     * - Theatrical
     * - Digital
     * - Physical
     * - TV
     *
     * @param {number} movieId
     * @returns {AxiosPromise<any>}
     */
    releaseDates(movieId: number) {
      return request('get', `/movie/${movieId}/release_dates`);
    },
    /**
     * Get the videos that have been added to a movie.
     *
     * @param {number} movieId
     * @param {{ language?: string }} [query]
     * @returns {AxiosPromise<any>}
     */
    videos(movieId: number, query?: { language?: string }) {
      return request('get', `/movie/${movieId}/videos`, query);
    },
    /**
     * Get a list of translations that have been created for a movie.
     *
     * @param {number} movieId
     * @returns {AxiosPromise<any>}
     */
    translations(movieId: number) {
      return request('get', `/movie/${movieId}/translations`);
    },
    /**
     * Get a list of recommended movies for a movie.
     *
     * @param {number} movieId
     * @param {{ language?: string; page?: number }} [query]
     * @returns {AxiosPromise<any>}
     */
    recommendations(movieId: number, query?: { language?: string; page?: number }) {
      return request('get', `/movie/${movieId}/recommendations`, query);
    },
    /**
     * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
     * These items are assembled by looking at keywords and genres.
     *
     * @param {number} movieId
     * @param {{ language?: string; page?: number }} [query]
     * @returns {AxiosPromise<any>}
     */
    similar(movieId: number, query?: { language?: string; page?: number }) {
      return request('get', `/movie/${movieId}/similar`);
    },
    /**
     * Get the user reviews for a movie.
     *
     * @param {number} movieId
     * @param {{ language?: string; page?: number }} [query]
     * @returns {AxiosPromise<any>}
     */
    reviews(movieId: number, query?: { language?: string; page?: number }) {
      return request('get', `/movie/${movieId}/reviews`);
    },
    /**
     * Get a list of lists that this movie belongs to.
     *
     * @param {number} movieId
     * @param {{ language?: string; page?: number }} [query]
     * @returns {AxiosPromise<any>}
     */
    lists(movieId: number, query?: { language?: string; page?: number }) {
      return request('get', `/movie/${movieId}/lists`);
    },
    /**
     * Rate a movie.
     * A valid session or guest session ID is required.
     *
     * @param {number} movieId
     * @param {{ guest_session_id?: string; session_id?: string }} query
     * @param {{ value: number }} body
     * @returns {AxiosPromise<any>}
     */
    rate(movieId: number, query: { guest_session_id?: string; session_id?: string }, body: { value: number }) {
      return request('post', `/movie/${movieId}/rating`, query, body);
    },
    /**
     * Remove your rating for a movie.
     * A valid session or guest session ID is required.
     *
     * @param {number} movieId
     * @param {{ guest_session_id?: string; session_id?: string }} query
     * @returns {AxiosPromise<any>}
     */
    deleteRating(movieId: number, query: { guest_session_id?: string; session_id?: string }) {
      return request('delete', `/movie/${movieId}/rating`, query);
    },
    /**
     * Get the most newly created movie. This is a live response and will continuously change.
     *
     * @param {{ language?: string }} [query]
     * @returns {AxiosPromise<any>}
     */
    latest(query?: { language?: string }) {
      return request('get', '/movie/latest', query);
    },
    /**
     * Get a list of movies in theatres.
     * This is a release type query that looks for all movies that
     * have a release type of 2 or 3 within the specified date range.
     * You can optionally specify a region prameter
     * which will narrow the search to only look for theatrical release dates within the specified country.
     *
     * @param {{ language?: string; page?: number; region?: string }} [query]
     * @returns
     */
    nowPlaying(query?: { language?: string; page?: number; region?: string }) {
      return request('get', '/movie/now_playing', query);
    },
    /**
     * Get a list of the current popular movies on TMDb. This list updates daily.
     *
     * @param {{ language?: string; page?: number; region?: string }} [query]
     * @returns
     */
    popular(query?: { language?: string; page?: number; region?: string }) {
      return request('get', '/movie/popular', query);
    },
    /**
     * Get the top rated movies on TMDb.
     *
     * @param {{ language?: string; page?: number; region?: string }} [query]
     * @returns
     */
    topRated(query?: { language?: string; page?: number; region?: string }) {
      return request('get', '/movie/top_rated', query);
    },
    /**
     * Get a list of upcoming movies in theatres.
     * This is a release type query that looks for
     * all movies that have a release type of 2 or 3 within the specified date range.
     * You can optionally specify a region prameter which will narrow the search to only look for
     * theatrical release dates within the specified country.
     *
     * @param {{ language?: string; page?: number; region?: string }} [query]
     * @returns
     */
    upcoming(query?: { language?: string; page?: number; region?: string }) {
      return request(`get`, '/movie/upcoming', query);
    }
  }
};

export default TMDB;
