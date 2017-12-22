import * as apis from '../../src/api';

const existApiObjArr = ['account', 'certifications', 'changes', 'company', 'discover', 'movies'];

describe('Apis', () => {
  existApiObjArr.forEach(apiKey => {
    it(`should contain ${apiKey} api`, () => {
      expect(apis[apiKey]).toBeDefined();
    });
  });
});
