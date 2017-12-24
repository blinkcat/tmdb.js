import changes from './changes';

const changesMethods = ['movie', 'tv', 'person'];

describe('changes api', () => {
  changesMethods.forEach(method => {
    it(`has ${method} method`, () => {
      expect(changes[method]).toEqual(expect.any(Function));
    });
  });
});
