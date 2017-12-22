import { validateObj } from '../src/validate';

describe('validate', () => {
  describe('validateObj', () => {
    it('is function', () => {
      expect(validateObj).toEqual(expect.any(Function));
    });

    it('returns true when {a:1,b:2,c:3:d:4} and [a,b,d] are passed in', () => {
      expect(validateObj({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'b', 'd'])).toBe(true);
    });
  });
});
