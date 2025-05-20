import {
  SinglyLinkedList,
  Node,
} from '../../implementation/singly-linked-list.object-oriented';

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
