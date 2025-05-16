export default class Stack<T> {
  private items: T[] = [];

  get length() {
    return this.items.length;
  }

  peek(): T | null {
    return this.items?.[0] ?? null
  }

  push(item: T) {
    this.items = [item, ...this.items];
  }

  pop(): T | null {
    const top = this.peek();

    this.items = this.items.slice(1);

    return top;
  }
}
