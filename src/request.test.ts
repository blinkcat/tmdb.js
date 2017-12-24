import nock from 'nock';
import config from './config';
import request, { postOrDeleteDefaultContentType } from './request';

const apiPath = '/test';
const successResponse = { status: 'ok', data: { a: 1 } };
const apiKeyQs = { api_key: config.api_key };
const mockQS = { a: '1', b: '#4%?&' };
const mockBody = { c: '4fewf232', d: true };

describe('request', () => {
  describe('supports get method', () => {
    it('can invoke get method without querystring', () => {
      nock(config.base_url)
        .get(apiPath)
        .query(actualQueryObject => {
          expect(actualQueryObject).toEqual(apiKeyQs);
          return true;
        })
        .reply(200, successResponse);
      expect.assertions(2);
      return request('get', apiPath).then(res => {
        expect(res.data).toEqual(successResponse);
      });
    });

    it('can invoke get method with querystring', () => {
      nock(config.base_url)
        .get(apiPath)
        .query(actualQueryObject => {
          expect(actualQueryObject).toEqual({ ...mockQS, ...apiKeyQs });
          return true;
        })
        .reply(200, successResponse);
      expect.assertions(2);
      return request('get', apiPath, mockQS).then(res => {
        expect(res.data).toEqual(successResponse);
      });
    });
  });

  describe('supports post method', () => {
    it('can invoke post method without querystring and request body', () => {
      nock(config.base_url)
        .matchHeader('Content-Type', ct => {
          expect(ct).toBe(postOrDeleteDefaultContentType);
          return true;
        })
        .post(apiPath)
        .query(actualQueryObject => {
          expect(actualQueryObject).toEqual(apiKeyQs);
          return true;
        })
        .reply(200, successResponse);
      expect.assertions(3);
      return request('post', apiPath).then(res => {
        expect(res.data).toEqual(successResponse);
      });
    });

    it('can invoke post method with querystring but without request body', () => {
      nock(config.base_url)
        .matchHeader('Content-Type', ct => {
          expect(ct).toBe(postOrDeleteDefaultContentType);
          return true;
        })
        .post(apiPath)
        .query(actualQueryObject => {
          expect(actualQueryObject).toEqual({ ...apiKeyQs, ...mockQS });
          return true;
        })
        .reply(200, successResponse);
      expect.assertions(3);
      return request('post', apiPath, mockQS).then(res => {
        expect(res.data).toEqual(successResponse);
      });
    });

    it('can invoke post method with querystring and request body', () => {
      nock(config.base_url)
        .matchHeader('Content-Type', ct => {
          expect(ct).toBe(postOrDeleteDefaultContentType);
          return true;
        })
        .post(apiPath, body => {
          expect(body).toEqual(mockBody);
          return true;
        })
        .query(actualQueryObject => {
          expect(actualQueryObject).toEqual({ ...apiKeyQs, ...mockQS });
          return true;
        })
        .reply(200, successResponse);
      expect.assertions(4);
      return request('post', apiPath, mockQS, mockBody).then(res => {
        expect(res.data).toEqual(successResponse);
      });
    });
  });

  describe('supports delete method', () => {
    it('can invoke delete method', () => {
      nock(config.base_url)
        .matchHeader('Content-Type', ct => {
          expect(ct).toBe(postOrDeleteDefaultContentType);
          return true;
        })
        .delete(apiPath)
        .query(actualQueryObject => {
          expect(actualQueryObject).toEqual(apiKeyQs);
          return true;
        })
        .reply(200, successResponse);
      expect.assertions(3);
      return request('delete', apiPath).then(res => {
        expect(res.data).toEqual(successResponse);
      });
    });
  });

  describe("doesn't support other method", () => {
    ['head', 'options', 'trace', 'connect', 'put'].forEach(method => {
      it(`throw Error if invoked with ${method} method`, () => {
        expect(() => {
          request.call(request, method, apiPath);
        }).toThrow();
      });
    });
  });
});
