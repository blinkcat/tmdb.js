import discover from './discover';

const discoverMethods = ['movie', 'tv'];

describe('discover api', () => {
  discoverMethods.forEach(method => {
    it(`has ${method} method`, () => {
      expect(discover[method]).toEqual(expect.any(Function));
    });
  });
});
