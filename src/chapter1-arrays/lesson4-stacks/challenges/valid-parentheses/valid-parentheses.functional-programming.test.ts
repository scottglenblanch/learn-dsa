import isValidParentheses from './valid-parentheses.functional-programming';

describe('valid parentheses', () => {
  const opening = ['(', '[', '{'];

  const closing = [')', ']', '}'];

  it('should be true with empty string', () => {
    expect(isValidParentheses('')).toBe(true);
  });

  describe('single character', () => {
    [...opening, ...closing].forEach(char => {
      const expected = false;
      const result = isValidParentheses(char);

      it(`with single character ${char} returns false`, () => {
        expect(result).toBe(expected);
      });
    });
  });

  describe('pairs', () => {
    opening.forEach((openingChar, index) => {
      const closingChar = closing[index];

      it(`should be false with ${closingChar}${openingChar}`, () => {
        const input = `${closingChar}${openingChar}`;

        expect(isValidParentheses(input)).toBe(false);
      });

      it(`should be true with ${openingChar}${closingChar}`, () => {
        const input = `${openingChar}${closingChar}`;

        expect(isValidParentheses(input)).toBe(true);
      });
    });
  });

  it('is valid with ()[]{}([{}])', () => {
    const input = '()[]{}([{}])';
    const expected = true;
    const result = isValidParentheses(input);

    expect(result).toBe(expected);
  });
});
