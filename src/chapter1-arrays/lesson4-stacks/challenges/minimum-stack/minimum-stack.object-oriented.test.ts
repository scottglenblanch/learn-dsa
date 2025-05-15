import MinimumStack from './minimum-stack.object-oriented';

describe('minimum-stack', () => {
  let minStack = new MinimumStack();

  beforeEach(() => {
    minStack = new MinimumStack();
  });

  it('will return null when there are no items', () => {
    expect(minStack.top()).toBe(null);
    expect(minStack.getMin()).toBe(null);
    expect(minStack.pop()).toBe(null);
  });

  it('will return 1 with single item', () => {
    minStack.push(1);

    expect(minStack.top()).toBe(1);
    expect(minStack.getMin()).toBe(1);
    expect(minStack.pop()).toBe(1);
  });

  it('will return recently added number when numbers added in descending order', () => {
    for (let i = 5; i >= 0; i--) {
      minStack.push(i);

      expect(minStack.top()).toBe(i);
      expect(minStack.getMin()).toBe(i);
    }
  });

  it('will return same minimum number when numbers added in ascending order', () => {
    for (let i = 0; i <= 5; i++) {
      minStack.push(i);

      expect(minStack.top()).toBe(i);
      expect(minStack.getMin()).toBe(0);
    }
  });

  it('will return proper minimum number when minimum number changes based on order added', () => {
    for (let i = 0; i <= 100; i++) {
      const isMadeNegative = i % 10 === 0;
      const num = i * (isMadeNegative ? -1 : 1);

      minStack.push(num);
    }

    for (let i = 100; i >= 0; i--) {
      const isMadeNegative = i % 10 === 0;
      const num = i * (isMadeNegative ? -1 : 1);
      const expectedMinimum = Math.floor(i / 10) * 10 * -1;

      expect(minStack.top()).toBe(num);
      expect(minStack.getMin()).toBe(expectedMinimum);
      expect(minStack.pop()).toBe(num);
    }
  });
});
