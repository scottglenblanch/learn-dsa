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

  describe('binary search tree - remove function', () => {
    let binarySearchTree: BinarySearchTree<number>;

    beforeEach(() => {
      binarySearchTree = new BinarySearchTree<number>(
        (a: number, b: number) => a - b
      );
    });

    it('remove from empty tree', () => {
      binarySearchTree.remove(1);
      expect(binarySearchTree.root).toBe(null);
      expect(binarySearchTree.listFromBinarySearchTree).toEqual([]);
    });

    it('remove single root node', () => {
      binarySearchTree.add(1);
      binarySearchTree.remove(1);
      expect(binarySearchTree.root).toBe(null);
      expect(binarySearchTree.listFromBinarySearchTree).toEqual([]);
      expect(binarySearchTree.has(1)).toBe(false);
    });

    it('remove leaf node', () => {
      [2, 1, 3].forEach(val => binarySearchTree.add(val));
      binarySearchTree.remove(1);
      expect(binarySearchTree.listFromBinarySearchTree).toEqual([2, 3]);
      expect(binarySearchTree.has(1)).toBe(false);
      expect(binarySearchTree.has(2)).toBe(true);
      expect(binarySearchTree.has(3)).toBe(true);
    });

    it('remove node with one child', () => {
      [2, 1, 3, 0].forEach(val => binarySearchTree.add(val));
      binarySearchTree.remove(1);
      expect(binarySearchTree.listFromBinarySearchTree).toEqual([0, 2, 3]);
      expect(binarySearchTree.has(1)).toBe(false);
      expect(binarySearchTree.has(0)).toBe(true);
      expect(binarySearchTree.has(2)).toBe(true);
      expect(binarySearchTree.has(3)).toBe(true);
    });

    it('remove node with two children', () => {
      [5, 3, 7, 2, 4, 6, 8].forEach(val => binarySearchTree.add(val));
      binarySearchTree.remove(3);
      expect(binarySearchTree.listFromBinarySearchTree).toEqual([
        2, 4, 5, 6, 7, 8,
      ]);
      expect(binarySearchTree.has(3)).toBe(false);
      expect(binarySearchTree.has(4)).toBe(true);
      expect(binarySearchTree.has(5)).toBe(true);
    });

    it('remove non-existent value', () => {
      [1, 2, 3].forEach(val => binarySearchTree.add(val));
      binarySearchTree.remove(4);
      expect(binarySearchTree.listFromBinarySearchTree).toEqual([1, 2, 3]);
      expect(binarySearchTree.has(4)).toBe(false);
      expect(binarySearchTree.has(1)).toBe(true);
      expect(binarySearchTree.has(2)).toBe(true);
      expect(binarySearchTree.has(3)).toBe(true);
    });

    it('remove root with two children', () => {
      [5, 3, 7, 2, 4, 6, 8].forEach(val => binarySearchTree.add(val));
      binarySearchTree.remove(5);
      expect(binarySearchTree.listFromBinarySearchTree).toEqual([
        2, 3, 4, 6, 7, 8,
      ]);
      expect(binarySearchTree.has(5)).toBe(false);
      expect(binarySearchTree.has(6)).toBe(true);
    });
  });
});
