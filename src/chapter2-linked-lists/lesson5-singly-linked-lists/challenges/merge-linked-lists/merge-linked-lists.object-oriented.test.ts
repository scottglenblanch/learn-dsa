import SinglyLinkedList from '../../implementation/singly-linked-list.object-oriented';
import { ComparatorFunction, mergeLinkedLists } from './merge-linked-lists.object-oriented';

describe('merge linked lists', () => {
  it('both linked lists as null', () => {
    const merged = mergeLinkedLists(null, null, () => 0);

    expect(merged).toBe(null);
  });

  it('first linked list is null', () => {
    const list1 = new SinglyLinkedList<string>();
    const list2 = null;

    list1.addToFront('a');

    const merged = mergeLinkedLists(list1, list2, () => 0);

    expect(merged?.toString()).toBe('a');
  });

  it('second linked list is null', () => {
    const list1 = null;
    const list2 = new SinglyLinkedList<string>();

    list2.addToFront('z');

    const merged = mergeLinkedLists(list1, list2, () => 0);

    expect(merged?.toString()).toBe('z');
  });

  it('combine lists with only 1 item', () => {
    const list1 = new SinglyLinkedList<string>();
    const list2 = new SinglyLinkedList<string>();
    const compareFunction: ComparatorFunction<string> = (a, b) => {
      if (a === null && b === null) return 0;
      else if (a === null) return -1;
      else if (b === null) return 1;

      return a < b ? -1 : 1;
    };

    list1.addToFront('a');
    list2.addToFront('z');

    const merged1 = mergeLinkedLists(list1, list2, compareFunction);
    const merged2 = mergeLinkedLists(list2, list1, compareFunction);

    expect(merged1?.toString()).toBe('az');
    expect(merged2?.toString()).toBe('az');
  });

  it('combines lists', () => {
    const list1 = new SinglyLinkedList<string>()
    const list2 = new SinglyLinkedList<string>()
    const alphabetLength = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1
    const compareFunction: ComparatorFunction<string> = (char1, char2) => {
      if (char1 === null && char2 === null) return 0;
      else if (char1 === null) return -1;
      else if (char2 === null) return 1;

      return char1 < char2 ? -1 : 1;
    };

    const expected = Array.from({ length: alphabetLength })
        .fill(null)
        .reduce((accum, o, index) => `${accum}${String.fromCharCode('a'.charCodeAt(0) + index)}`, '')

    for(let i = 0; i < alphabetLength; i++) {
        const listToUse = i % 2 === 0 ? list1 : list2
        const char = String.fromCharCode('z'.charCodeAt(0) - i)

        listToUse.addToFront(char)
    }


    expect(mergeLinkedLists(list1, list2, compareFunction)?.toString()).toBe(expected)

  })
});
