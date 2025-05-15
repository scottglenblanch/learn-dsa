export default class Stack<T> {
  private items: T[] = [];

  get length() {
    return this.items.length;
  }

  push(item: T) {
    this.items = [item, ...this.items];
  }

  pop(): T | null {
    const top = this.items?.[0] ?? null;

    this.items = this.items.slice(1);

    return top;
  }
}
