import authentication from './authentication';

const authenticationMethods = [
  'createRequestToken',
  'askTheUserForPermission',
  'createSession',
  'createSessionWithLogin',
  'createGuestSession'
];

describe('authentication api', () => {
  authenticationMethods.forEach(method => {
    it(`has ${method} method`, () => {
      expect(authentication[method]).toEqual(expect.any(Function));
    });
  });
});
