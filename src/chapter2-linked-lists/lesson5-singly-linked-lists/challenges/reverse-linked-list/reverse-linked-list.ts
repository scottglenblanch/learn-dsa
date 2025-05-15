import { Node } from '../../implementation/linked-list-node';
import SinglyLinkedList from '../../implementation/singly-linked-list';

export default class SinglyLinkedListWithReverseMethod<
  T,
> extends SinglyLinkedList<T> {
  reverse(): void {
    let prev: Node<T> | null = null;

    let curNode: Node<T> | null = this.head;

    while (curNode) {
      const nextNode = curNode?.next ?? null;
      const newPrev = curNode;
      const newCurNode = nextNode;

      curNode.next = prev;

      prev = newPrev;
      curNode = newCurNode;
    }

    this.frontSentinel.next = prev;
  }
}
