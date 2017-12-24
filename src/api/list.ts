import isNumber from 'lodash.isnumber';
import { throwNumberOrStringFieldError } from '../error';
import request from '../request';

export default function list(listId: string | number) {
  if (isNumber(listId) || typeof listId === 'string') {
    return {
      /**
       * Get the details of a list.
       *
       * @param {{ language?: string }} [query]
       * @returns {AxiosPromise<any>}
       */
      details(query?: { language?: string }) {
        return request('get', `/list/${listId}`, query);
      },
      /**
       * You can use this method to check if a movie has already been added to the list.
       *
       * @param {{ movie_id: number }} query
       * @returns {AxiosPromise<any>}
       */
      itemStatus(query: { movie_id: number }) {
        return request('get', `/list/${listId}/item_status`, query);
      },
      /**
       * Create a list.
       *
       * @param {{ session_id: string }} query
       * @param {{
       *           name?: string;
       *           description?: string;
       *           language?: string;
       *         }} [body]
       * @returns {AxiosPromise<any>}
       */
      createAList(
        query: { session_id: string },
        body?: {
          name?: string;
          description?: string;
          language?: string;
        }
      ) {
        return request('post', '/list', query, body);
      },
      /**
       * Add a movie to a list.
       *
       * @param {{ session_id: string }} query
       * @param {{ media_id: string }} body
       * @returns {AxiosPromise<any>}
       */
      addMovie(query: { session_id: string }, body: { media_id: string }) {
        return request('post', `/list/${listId}/add_item`, query, body);
      },
      /**
       * Remove a movie from a list.
       *
       * @param {{ session_id: string }} query
       * @param {{ media_id: string }} body
       * @returns {AxiosPromise<any>}
       */
      removeMovie(query: { session_id: string }, body: { media_id: string }) {
        return request('post', `/list/${listId}/remove_item`, query, body);
      },
      /**
       * Clear all of the items from a list.
       *
       * @param {{ session_id: string; confirm: boolean }} query
       * @returns {AxiosPromise<any>}
       */
      clear(query: { session_id: string; confirm: boolean }) {
        return request('post', `/list/${listId}/clear`, query);
      },
      /**
       * Delete a list.
       *
       * @param {{ session_id: string }} query
       * @returns {AxiosPromise<any>}
       */
      delete(query: { session_id: string }) {
        return request('delete', `/list/${listId}`, query);
      }
    };
  } else {
    throwNumberOrStringFieldError('listId');
  }
}
