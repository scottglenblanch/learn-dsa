import { peek, pop, push, getLastIndex } from './stack.functional-programming'; // Adjust the import path based on your file structure

describe('stack functions', () => {
  // Tests for getLastIndex
  describe('getLastIndex', () => {
    test('returns -1 for an empty array', () => {
      expect(getLastIndex([])).toBe(-1);
    });

    test('returns 0 for an array with one element', () => {
      expect(getLastIndex([1])).toBe(0);
    });

    test('returns correct index for an array with multiple elements', () => {
      expect(getLastIndex([1, 2, 3])).toBe(2);
    });
  });

  // Tests for peek
  describe('peek', () => {
    test('returns null for an empty array', () => {
      expect(peek([])).toBeNull();
    });

    test('returns the only element for an array with one element', () => {
      expect(peek([42])).toBe(42);
    });

    test('returns the last element for an array with multiple elements', () => {
      expect(peek([1, 2, 3])).toBe(3);
    });

    test('works with different types (strings)', () => {
      expect(peek(['a', 'b', 'c'])).toBe('c');
    });

    test('works with different types (objects)', () => {
      const obj = { id: 1 };
      expect(peek([{}, obj])).toBe(obj);
    });
  });

  // Tests for pop
  describe('pop', () => {
    test('returns null item and empty array for an empty array', () => {
      const { item, newList } = pop([]);
      expect(item).toBeNull();
      expect(newList).toEqual([]);
    });

    test('returns the only element and empty array for a single-element array', () => {
      const { item, newList } = pop([1]);
      expect(item).toBe(1);
      expect(newList).toEqual([]);
    });

    test('returns last element and array without last element for multiple elements', () => {
      const { item, newList } = pop([1, 2, 3]);
      expect(item).toBe(3);
      expect(newList).toEqual([1, 2]);
    });

    test('does not modify the original array', () => {
      const original = [1, 2, 3];
      const { newList } = pop(original);
      expect(original).toEqual([1, 2, 3]); // Original unchanged
      expect(newList).toEqual([1, 2]); // New list without last element
    });

    test('works with different types (strings)', () => {
      const { item, newList } = pop(['a', 'b', 'c']);
      expect(item).toBe('c');
      expect(newList).toEqual(['a', 'b']);
    });
  });

  // Tests for push
  describe('push', () => {
    test('adds item to an empty array', () => {
      expect(push([], 1)).toEqual([1]);
    });

    test('adds item to an array with one element', () => {
      expect(push([1], 2)).toEqual([1, 2]);
    });

    test('adds item to an array with multiple elements', () => {
      expect(push([1, 2], 3)).toEqual([1, 2, 3]);
    });

    test('does not modify the original array', () => {
      const original = [1, 2];
      const result = push(original, 3);
      expect(original).toEqual([1, 2]); // Original unchanged
      expect(result).toEqual([1, 2, 3]); // New array with added element
    });

    test('works with different types (strings)', () => {
      expect(push(['a'], 'b')).toEqual(['a', 'b']);
    });

    test('works with different types (objects)', () => {
      const obj = { id: 1 };
      expect(push([{ id: 0 }], obj)).toEqual([{ id: 0 }, obj]);
    });
  });
});
