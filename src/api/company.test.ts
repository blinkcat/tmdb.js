import company from './company';

const companyMethods = ['details', 'movies'];

describe('company api', () => {
  companyMethods.forEach(method => {
    it(`has ${method} method`, () => {
      expect(company[method]).toEqual(expect.any(Function));
    });
  });
});
