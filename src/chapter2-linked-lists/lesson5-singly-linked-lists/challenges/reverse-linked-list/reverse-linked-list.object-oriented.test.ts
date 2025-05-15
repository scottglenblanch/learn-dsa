import SinglyLinkedListWithReverseMethod from './reverse-linked-list';

describe('reverse linked list', () => {
  let linkedList = new SinglyLinkedListWithReverseMethod<string>();

  beforeEach(() => {
    linkedList = new SinglyLinkedListWithReverseMethod<string>();
  });

  it('should reverse', () => {
    const alphabetLength = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    const charsInput = Array.from({ length: alphabetLength })
      .fill(null)
      .map((aChar, index) => String.fromCharCode('a'.charCodeAt(0) + index));

    const expectedBeforeReverse = [...charsInput].reverse().join('');
    const expectedAfterReverse = charsInput.join('');

    for (const char of charsInput) {
      linkedList.addToFront(char);
    }

    expect(linkedList.toString()).toBe(expectedBeforeReverse);

    linkedList.reverse();

    expect(linkedList.toString()).toBe(expectedAfterReverse);
  });
});
