export class BinaryTreeNode<T> {
  public left: BinaryTreeNode<T> | null = null;
  public right: BinaryTreeNode<T> | null = null;

  constructor(public readonly val: T) {}
}

export class BinaryTree<T> {
  private root: BinaryTreeNode<T> | null = null;

  constructor(private comparator: (a: T, b: T) => number) {}

  public add(val: T) {
    const addRecursively = (
      node: BinaryTreeNode<T> | null
    ): BinaryTreeNode<T> => {
      if (node === null) return new BinaryTreeNode<T>(val);

      const nodeVal = node.val;

      const leftChild = (node as BinaryTreeNode<T>).left;
      const rightChild = (node as BinaryTreeNode<T>).right;

      const isAddLeft = this.comparator(val, nodeVal) < 0;

      if (isAddLeft) {
        node.left = addRecursively(leftChild);
      } else {
        node.right = addRecursively(rightChild);
      }

      return node;
    };

    this.root = addRecursively(this.root);
  }
}
