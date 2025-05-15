export default class SinglyLinkedList<T> {
  private frontSentinel = new Node<T>();
  private _length = 0;

  get head() {
    return this.frontSentinel.next;
  }

  get length() {
    return this._length;
  }

  public addToFront(item: T): void {
    const previousHead = this.head;
    const newHead = new Node(item);

    this._length += 1;

    this.connect(this.frontSentinel, newHead, previousHead);
  }

  public peek(): T | null {
    return this.head?.value ?? null;
  }

  public popFromFront(): T | null {
    const previousHead = this.head;
    const newHead = this.head?.next ?? null;

    this._length -= 1;

    this.connect(this.frontSentinel, newHead);

    return previousHead?.value ?? null;
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

  private connect(...nodes: (Node<T> | null)[]) {
    const validNodes = nodes.filter(node => !!node);

    for (let i = 0; i < validNodes.length - 1; i++) {
      const curNode = validNodes[i];
      const nextNode = validNodes[i + 1];

      curNode.next = nextNode;
    }
  }
}

class Node<T> {
  public next: Node<T> | null = null;

  constructor(public readonly value?: T) {}

  public toString(): string {
    return String(this.value);
  }
}
