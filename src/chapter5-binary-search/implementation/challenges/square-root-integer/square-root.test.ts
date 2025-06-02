import { BinarySearchSquareRoot } from './square-root';

describe('BinarySearchSquareRoot', () => {
  test('should find floor of square root for perfect square (16)', () => {
    const searcher = new BinarySearchSquareRoot(16);
    expect(searcher.indexOf(16)).toBe(4); // 4 * 4 = 16
  });

  test('should find floor of square root for non-perfect square (17)', () => {
    const searcher = new BinarySearchSquareRoot(17);
    expect(searcher.indexOf(17)).toBe(4); // 4 * 4 = 16, 5 * 5 = 25
  });

  test('should find floor of square root for small number (3)', () => {
    const searcher = new BinarySearchSquareRoot(3);
    expect(searcher.indexOf(3)).toBe(1); // 1 * 1 = 1, 2 * 2 = 4
  });

  test('should find floor of square root for 1', () => {
    const searcher = new BinarySearchSquareRoot(1);
    expect(searcher.indexOf(1)).toBe(1); // 1 * 1 = 1
  });

  test('should find floor of square root for large number (100)', () => {
    const searcher = new BinarySearchSquareRoot(100);
    expect(searcher.indexOf(100)).toBe(10); // 10 * 10 = 100
  });

  test('should find floor of square root for number between squares (99)', () => {
    const searcher = new BinarySearchSquareRoot(99);
    expect(searcher.indexOf(99)).toBe(9); // 9 * 9 = 81, 10 * 10 = 100
  });

  test('should handle edge case of input 0', () => {
    const searcher = new BinarySearchSquareRoot(0);
    expect(searcher.indexOf(0)).toBe(0); // Special case: 0 * 0 = 0
  });

  test('should handle large input (10000)', () => {
    const searcher = new BinarySearchSquareRoot(10000);
    expect(searcher.indexOf(10000)).toBe(100); // 100 * 100 = 10000
  });
});
