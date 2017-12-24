import keys from 'lodash.keys';
import * as apis from '.';

const existApiObjArr = [
  'account',
  'authentication',
  'certifications',
  'changes',
  'company',
  'discover',
  'movies'
];

describe('Apis', () => {
  existApiObjArr.forEach(apiKey => {
    it(`should contain ${apiKey} api`, () => {
      expect(apis[apiKey]).toBeDefined();
      expect(keys(apis[apiKey]).length).toBeGreaterThan(0);
    });
  });
});
