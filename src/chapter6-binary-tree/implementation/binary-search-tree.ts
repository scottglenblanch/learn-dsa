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
    const found = this.getNodeWithValue(this.root, val);

    return Boolean(found);
  }

  public add(val: T): void {
    this._root = this.getNodeWithAddedValueInSubtree(this._root, val);
  }

  private getNodeWithAddedValueInSubtree(
    node: BinarySearchTreeNode<T> | null,
    val: T
  ) {
    if (node === null) return new BinarySearchTreeNode<T>(val);

    const nodeVal = node.val;

    const leftChild = (node as BinarySearchTreeNode<T>).left;
    const rightChild = (node as BinarySearchTreeNode<T>).right;

    const isAddLeft = this.comparator(val, nodeVal) < 0;

    if (isAddLeft) {
      node.left = this.getNodeWithAddedValueInSubtree(leftChild, val);
    } else {
      node.right = this.getNodeWithAddedValueInSubtree(rightChild, val);
    }

    return node;
  }

  public remove(val: T): void {
    this._root = this.getNodeWithRemovedValueInSubtree(this._root, val);
  }

  private getNodeWithValue(
    node: BinarySearchTreeNode<T> | null,
    val: T
  ): BinarySearchTreeNode<T> | null {
    const isDone = node === null || this.comparator(val, node.val) === 0;
    const isGoLeft = node && this.comparator(val, node.val) < 0;
    const isGoRight = node && this.comparator(val, node.val) > 0;

    const leftChild = node?.left ?? null;
    const rightChild = node?.right ?? null;

    if (isDone) return node;
    if (isGoLeft) return this.getNodeWithValue(leftChild, val);
    if (isGoRight) return this.getNodeWithValue(rightChild, val);
    throw Error('getNodeWithValue has issue with logic');
  }

  private getNodeWithRemovedValueInSubtree(
    node: BinarySearchTreeNode<T> | null,
    val: T
  ): BinarySearchTreeNode<T> | null {
    const leftChild = node?.left ?? null;
    const rightChild = node?.right ?? null;

    const isNotDelete = node === null;
    const isDelete = node && node.val === val;
    const isGoLeft = node && this.comparator(val, node.val) < 0;
    const isGoRight = node && this.comparator(val, node.val) > 0;

    const isDeleteWhenNoRightChild = isDelete && rightChild === null;
    const isDeleteWithRightChild = isDelete && Boolean(rightChild);

    if (isNotDelete) {
      return null;
    }

    if (isGoLeft) {
      node.left = this.getNodeWithRemovedValueInSubtree(leftChild, val);
      return node;
    }

    if (isGoRight) {
      node.right = this.getNodeWithRemovedValueInSubtree(rightChild, val);
      return node;
    }

    if (isDeleteWhenNoRightChild) {
      return leftChild;
    }

    if (isDeleteWithRightChild) {
      const minNodeOnRightSubtree = this.getNodeWithMinimumValue(
        rightChild
      ) as BinarySearchTreeNode<T>;
      const minVal = minNodeOnRightSubtree.val as T;
      const newRightChild = this.getNodeWithRemovedValueInSubtree(
        rightChild,
        minVal
      );
      const newNode = new BinarySearchTreeNode<T>(minVal);

      newNode.left = leftChild;
      newNode.right = newRightChild;

      return newNode;
    }

    throw Error('getNodeWithRemovedNodeValue has issue with logic');
  }

  private getNodeWithMinimumValue(
    node: BinarySearchTreeNode<T> | null
  ): BinarySearchTreeNode<T> | null {
    const leftChild = node?.left ?? null;
    const isDone = leftChild === null;

    return isDone ? node : this.getNodeWithMinimumValue(leftChild);
  }
}
