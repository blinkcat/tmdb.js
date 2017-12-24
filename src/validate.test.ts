import { validateObj } from './validate';

describe('validate', () => {
  describe('validateObj', () => {
    it('is function', () => {
      expect(validateObj).toEqual(expect.any(Function));
    });

    it('returns true if {a:1,b:2,c:3:d:4} and [a,b,d] are passed in', () => {
      expect(validateObj({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'b', 'd'])).toBe(true);
    });

    it("throws 'Missing required field' Error if {a:1,b:2} and ['c'] are passed in", () => {
      expect(() => {
        validateObj({ a: 1, b: 2 }, ['c']);
      }).toThrowError('Missing required field: c');
    });

    it("throw 'Missing one of: a, c, d' Error if {a:1,b:2} and ['a','c','d']", () => {
      expect(() => {
        validateObj({ a: 1, b: 2 }, ['a', 'c', 'd']);
      }).toThrowError('Missing one of: a, c, d');
    });
  });
});
