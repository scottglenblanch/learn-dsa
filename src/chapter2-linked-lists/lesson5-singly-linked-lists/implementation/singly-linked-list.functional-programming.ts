export interface Node_FP<T> {
  val: T;
  next: Node_FP<T>;
}

export interface SinglyLinkedList_FP<T> {
  head: Node_FP<T> | null;
  length: number;
}

export const getInitialSinglyLinkedList = <T>() =>
  ({
    head: null,
    length: 0,
  }) as SinglyLinkedList_FP<T>;

export const addToFront = <T>(
  list: SinglyLinkedList_FP<T>,
  item: T
): SinglyLinkedList_FP<T> => {
  const { head: prevHead, length: prevLength } = list;

  const newHead = { val: item, next: prevHead };
  const newLength = prevLength + 1;

  return {
    head: newHead,
    length: newLength,
  } as SinglyLinkedList_FP<T>;
};

export const removeFromFront = <T>(
  list: SinglyLinkedList_FP<T>
): SinglyLinkedList_FP<T> => {
  const { head: prevHead, length: prevLength } = list;

  const newHead = prevHead?.next ?? null;
  const newLength = prevLength - 1;

  return {
    head: newHead,
    length: newLength,
  } as SinglyLinkedList_FP<T>;
};

export const getArrayListFromSinglyLinkedList = <T>(
  linkedList: SinglyLinkedList_FP<T>
) => {
  function aggregateRecursively(node: Node_FP<T> | null, arrayList: T[]) {
    if (!node) return arrayList;

    return aggregateRecursively(node.next, [node.val, ...arrayList]);
  }

  return aggregateRecursively(linkedList.head, []);
};
