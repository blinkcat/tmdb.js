import certifications from './certifications';

const certificationsMethods = ['movie', 'tv'];

describe('certifications api', () => {
  certificationsMethods.forEach(method => {
    it(`has ${method} method`, () => {
      expect(certifications[method]).toEqual(expect.any(Function));
    });
  });
});
