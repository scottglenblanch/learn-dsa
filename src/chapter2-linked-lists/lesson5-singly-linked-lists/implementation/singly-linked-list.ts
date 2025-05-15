import { Node } from './linked-list-node';

export default class SinglyLinkedList<T> {
  protected frontSentinel = new Node<T>();
  private _length = 0;

  get head() {
    return this.frontSentinel.next;
  }

  get length() {
    return this._length;
  }

  public addToFront(item: T): void {
    const formerHead = this.head;
    const newHead = new Node(item);

    this.frontSentinel.next = newHead;
    newHead.next = formerHead;

    this._length += 1;
  }

  public peek(): T | null {
    return this.head?.value ?? null;
  }

  public popFromFront(): T | null {
    const formerHead = this.head;
    const newHead = formerHead?.next ?? null;

    this.frontSentinel.next = newHead;

    this._length -= 1;

    return formerHead?.value ?? null;
  }

  public toString(): string {
    let curNode = this.head;
    let message = '';

    while (curNode) {
      message += String(curNode.value);

      curNode = curNode.next;
    }

    return message;
  }
}
