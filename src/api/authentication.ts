import request from '../request';
import { validateObj } from '../validate';

// more details
// https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
const authentication = {
  /**
   * Create a temporary request token that can be used to validate a TMDb user login.
   *
   * @returns {AxiosPromise<any>}
   */
  createRequestToken() {
    return request('get', '/authentication/token/new');
  },
  /**
   * returns user authentication url
   *
   * @param {string} requestToken
   * @param {string} [redirectTo]
   * @returns {string}
   */
  askTheUserForPermission(requestToken: string, redirectTo?: string) {
    if (redirectTo) {
      return `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${encodeURIComponent(
        redirectTo
      )}`;
    } else {
      return `https://www.themoviedb.org/authenticate/${requestToken}`;
    }
  },

  /**
   * You can use this method to create a fully valid session ID once a user has validated the request token.
   *
   * @returns {AxiosPromise<any>}
   */
  createSession() {
    return request('get', '/authentication/session/new');
  },
  /**
   * This method allows an application to validate a request token by entering a username and password.
   *
   * @param {{ username: string; password: string; request_token: string }} query
   * @returns {AxiosPromise<any>}
   */
  createSessionWithLogin(query: { username: string; password: string; request_token: string }) {
    validateObj(query, ['username', 'password', 'request_token']);
    return request('get', '/authentication/token/validate_with_login', query);
  },
  /**
   * This method will let you create a new guest session.
   * Guest sessions are a type of session that will let a user rate movies and TV shows
   * but not require them to have a TMDb user account.
   *
   * @returns {AxiosPromise<any>}
   */
  createGuestSession() {
    return request('get', '/authentication/guest_session/new');
  }
};

export default authentication;
