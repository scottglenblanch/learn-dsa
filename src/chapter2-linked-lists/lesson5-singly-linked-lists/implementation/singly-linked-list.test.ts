import SinglyLinkedList from './singly-linked-list';

describe('singly linked list', () => {
  let linkedList = new SinglyLinkedList<string>();

  beforeEach(() => {
    linkedList = new SinglyLinkedList<string>();
  });

  it('addToFront', () => {
    const lengthOfAlphabet = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    expect(linkedList.length).toBe(0);

    for (let i = 0, expectedToString = ''; i < lengthOfAlphabet; i++) {
      const char = String.fromCharCode('a'.charCodeAt(0) + i);

      expectedToString = `${char}${expectedToString}`;

      linkedList.addToFront(char);

      expect(linkedList.length).toBe(i + 1);
      expect(linkedList.peek()).toBe(char);
      expect(linkedList.toString()).toBe(expectedToString);
    }
  });

  it('popFromFront', () => {
    const lengthOfAlphabet = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    for (let i = 0; i < lengthOfAlphabet; i++) {
      const char = String.fromCharCode('a'.charCodeAt(0) + i);

      linkedList.addToFront(char);
    }

    for (let i = lengthOfAlphabet - 1; i >= 0; i--) {
      const char = String.fromCharCode('a'.charCodeAt(0) + i);

      expect(linkedList.length).toBe(i + 1);
      expect(linkedList.popFromFront()).toBe(char);
      expect(linkedList.length).toBe(i);
    }
  });
});
