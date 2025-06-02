export abstract class BinarySearch<T> {
  constructor(
    private readonly minIndex: number,
    private readonly maxIndex: number
  ) {}

  indexOf(val: T): number | null {
    let leftIndex: number = this.minIndex;
    let rightIndex: number = this.maxIndex;

    while (leftIndex < rightIndex) {
      const midIndex = this.getMidIndex(leftIndex, rightIndex);
      const midValue = this.getValueAtIndex(midIndex);

      const isCheckLeftSide = this.compare(val, midValue) <= 0;

      if (isCheckLeftSide) {
        // val <= midValue, so midIndex is a candidate, but check left half
        rightIndex = midIndex;
      } else {
        // val > midValue, so lower bound is to the right
        leftIndex = midIndex + 1;
      }
    }

    return this.isFound(leftIndex, val) ? leftIndex : null;
  }

  private isFound(leftIndex: number, val: T) {
    const leftIndexValue = this.getValueAtIndex(leftIndex);

    return this.compare(leftIndexValue, val) === 0;
  }

  public abstract getValueAtIndex(index: number): T;

  public abstract compare(a: T, b: T): number;

  private getMidIndex(leftIndex: number, rightIndex: number) {
    return Math.floor((leftIndex + rightIndex) / 2);
  }
}
