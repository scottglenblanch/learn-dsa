export class Node<T> {
  public next: Node<T> | null = null;

  constructor(public readonly value?: T) {}

  public toString(): string {
    return String(this.value);
  }
}
