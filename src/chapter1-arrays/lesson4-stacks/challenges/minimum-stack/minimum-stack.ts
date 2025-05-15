import Stack from '../../implementation/stack';

type Item = {
  value: number;
  minimum: number;
};

export default class MinimumStack {
  private stack = new Stack<Item>();

  push(value: number): void {
    const mostRecent = this.getMostRecentItemWithoutRemovingItFromStack();
    const previousMinimum = mostRecent?.minimum ?? null;
    const isUpdateMinimum =
      previousMinimum === null || value < (previousMinimum as number);
    const minimum = isUpdateMinimum ? value : previousMinimum;

    this.stack.push({
      value,
      minimum,
    });
  }

  pop(): number | null {
    return this.stack.pop()?.value ?? null;
  }

  top(): number | null {
    const mostRecent = this.getMostRecentItemWithoutRemovingItFromStack();

    return mostRecent?.value ?? null;
  }

  getMin(): number | null {
    const mostRecent = this.getMostRecentItemWithoutRemovingItFromStack();

    return mostRecent?.minimum ?? null;
  }

  private getMostRecentItemWithoutRemovingItFromStack(): Item | null {
    const mostRecent = this.stack.pop();

    if (mostRecent) {
      this.stack.push(mostRecent);
    }

    return mostRecent ?? null;
  }
}
