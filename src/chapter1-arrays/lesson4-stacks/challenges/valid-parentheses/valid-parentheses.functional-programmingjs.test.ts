import { isValid } from './valid-parentheses.functional-programmingjs';

describe('isValid Parentheses', () => {
  test('will return true for valid brackets', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('{[]}')).toBe(true);
  });

  test('will return false for invalid brackets', () => {
    expect(isValid('()]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('(')).toBe(false);
  });

  test('will return for edge cases', () => {
    expect(isValid('')).toBe(true);
    expect(isValid('{}')).toBe(true);
  });
});
