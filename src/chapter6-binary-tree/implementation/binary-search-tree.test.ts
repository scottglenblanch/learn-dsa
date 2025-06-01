import { BinarySearchTree } from './binary-search-tree';

describe('binary search tree', () => {
  it('initially empty', () => {
    const binarySearchTree = new BinarySearchTree<number>(
      (a: number, b: number) => a - b
    );

    expect(binarySearchTree.root).toBe(null);

    expect(binarySearchTree.listFromBinarySearchTree).toEqual([]);
  });

  it('single item', () => {
    const binarySearchTree = new BinarySearchTree<number>(
      (a: number, b: number) => a - b
    );

    binarySearchTree.add(0);

    expect(binarySearchTree.root?.val).toBe(0);

    expect(binarySearchTree.listFromBinarySearchTree).toEqual([0]);
  });

  it('multiple items', () => {
    const binarySearchTree = new BinarySearchTree<number>(
      (a: number, b: number) => a - b
    );

    for (let i = 0; i < 3; i++) {
      binarySearchTree.add(i);
    }

    expect(binarySearchTree.root?.val).toBe(0);

    expect(binarySearchTree.listFromBinarySearchTree).toEqual([0, 1, 2]);
  });

  it('multiple items, has function', () => {
    const binarySearchTree = new BinarySearchTree<number>(
      (a: number, b: number) => a - b
    );

    for (let i = 0; i < 3; i++) {
      binarySearchTree.add(i);
    }

    for (let i = 0; i < 3; i++) {
      expect(binarySearchTree.has(i)).toBe(true);
    }

    expect(binarySearchTree.has(3)).toBe(false);
  });
});
