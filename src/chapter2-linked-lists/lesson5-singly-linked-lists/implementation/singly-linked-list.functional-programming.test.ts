import {
  addToFront,
  getArrayListFromSinglyLinkedList,
  getInitialSinglyLinkedList,
  removeFromFront,
} from './singly-linked-list.functional-programming';

describe('singly linked list, functional programming', () => {
  it('add to front', () => {
    const linkedList = addToFront<string>(
      getInitialSinglyLinkedList<string>(),
      'a'
    );

    expect(getArrayListFromSinglyLinkedList(linkedList)).toEqual(['a']);
  });

  it('add to front multiple times', () => {
    const nums = Array.from({ length: 10 })
      .fill(null)
      .map((o, index) => index);

    const linkedList = nums.reduce(
      (accum, numItem) => addToFront<number>(accum, numItem),
      getInitialSinglyLinkedList<number>()
    );

    expect(getArrayListFromSinglyLinkedList(linkedList)).toEqual(nums);
  });

  it('remove from front', () => {
    let linkedList = addToFront<string>(
      getInitialSinglyLinkedList<string>(),
      'a'
    );
    linkedList = removeFromFront<string>(linkedList);

    expect(getArrayListFromSinglyLinkedList(linkedList)).toEqual([]);
  });
});
