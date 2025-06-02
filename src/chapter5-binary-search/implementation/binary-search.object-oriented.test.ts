import { BinarySearch } from './binary-search.object-oriented';

class BinarySearchNumbers extends BinarySearch<number> {
  constructor(private readonly list: number[]) {
    super(0, list.length - 1);
  }

  public getValueAtIndex(index: number): number {
    return this.list[index];
  }
  public compare(a: number, b: number): number {
    return a - b;
  }
}

describe('binary search', () => {
  describe('numbers list', () => {
    const numbers = Array.from({ length: 10 }).map((o, index) => index);
    let binarySearchNumbers: BinarySearchNumbers;

    beforeEach(() => {
      binarySearchNumbers = new BinarySearchNumbers(numbers);
    });

    it('should have numbers 0 through and including 9', () => {
      for (let i = 0; i <= 9; i++) {
        expect(binarySearchNumbers.indexOf(i)).toBe(i);
      }
    });

    it('should not have number -1', () => {
      expect(binarySearchNumbers.indexOf(-1)).toBe(null);
    });

    it('should not have number 10', () => {
      expect(binarySearchNumbers.indexOf(10)).toBe(null);
    });

    it('should not have number 5.5', () => {
      expect(binarySearchNumbers.indexOf(5.5)).toBe(null);
    });
  });
});
