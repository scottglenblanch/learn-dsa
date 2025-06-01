export class BinarySearchTreeNode<T> {
  public left: BinarySearchTreeNode<T> | null = null;
  public right: BinarySearchTreeNode<T> | null = null;

  constructor(public readonly val: T) {}
}

export class BinarySearchTree<T> {
  private _root: BinarySearchTreeNode<T> | null = null;

  constructor(private readonly comparator: (a: T, b: T) => number) {}

  get root() {
    return this._root;
  }

  get listFromBinarySearchTree() {
    const recursivelyAddToList = (
      node: BinarySearchTreeNode<T> | null,
      list: T[]
    ): T[] => {
      return node
        ? [
            ...recursivelyAddToList(node.left, list),
            node.val,
            ...recursivelyAddToList(node.right, list),
          ]
        : list;
    };

    return recursivelyAddToList(this.root, []);
  }

  public has(val: T): boolean {
    const recursivelyFind = (node: BinarySearchTreeNode<T> | null): boolean => {
      const isFail = node === null;
      const isFound = node && this.comparator(val, node.val) === 0;
      const isGoLeft = node && this.comparator(val, node.val) < 0;
      const isGoRight = node && this.comparator(val, node.val) > 0;

      if (isFail) return false;
      else if (isFound) return true;
      else if (isGoLeft) return recursivelyFind(node.left);
      else if (isGoRight) return recursivelyFind(node.right);
      else throw 'condition not handled';
    };

    return recursivelyFind(this.root);
  }

  public add(val: T) {
    const addRecursively = (
      node: BinarySearchTreeNode<T> | null
    ): BinarySearchTreeNode<T> => {
      if (node === null) return new BinarySearchTreeNode<T>(val);

      const nodeVal = node.val;

      const leftChild = (node as BinarySearchTreeNode<T>).left;
      const rightChild = (node as BinarySearchTreeNode<T>).right;

      const isAddLeft = this.comparator(val, nodeVal) < 0;

      if (isAddLeft) {
        node.left = addRecursively(leftChild);
      } else {
        node.right = addRecursively(rightChild);
      }

      return node;
    };

    this._root = addRecursively(this._root);
  }
}
