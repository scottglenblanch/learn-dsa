import { BinarySearch } from '../../binary-search.object-oriented';

export class BinarySearchSquareRoot extends BinarySearch<number> {
  constructor(input: number) {
    super(0, input);
  }

  public isFound(valCandidate: number, val: number) {
    const isExact = valCandidate * valCandidate === val;
    const isCloseEnough =
      valCandidate * valCandidate < val &&
      (valCandidate + 1) * (valCandidate + 1) > val;

    return isExact || isCloseEnough;
  }
  // For this problem, the value at index is just the index itself
  public getValueAtIndex(index: number): number {
    return index;
  }

  // Standard number comparison
  public compare(val: number, valCandidate: number): number {
    const calculatedForCompare = valCandidate * valCandidate;

    return val - calculatedForCompare;
  }
}
