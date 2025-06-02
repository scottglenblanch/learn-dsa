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
      const isShrink = this.compare(val, midValue) < 0;

      if (this.isFound(this.getValueAtIndex(midIndex), val)) {
        return midIndex;
      } else if (isShrink) {
        rightIndex = midIndex;
      } else {
        // val > midValue, so lower bound is to the right
        leftIndex = midIndex + 1;
      }
    }

    return this.isFound(this.getValueAtIndex(leftIndex), val)
      ? leftIndex
      : null;
  }

  public abstract isFound(valCandidate: T, val: T): boolean;

  public abstract getValueAtIndex(index: number): T;

  public abstract compare(val: T, midValue: T): number;

  private getMidIndex(leftIndex: number, rightIndex: number) {
    return Math.floor((leftIndex + rightIndex) / 2);
  }
}
