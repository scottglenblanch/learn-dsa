export class BinaryTreeNode<T> {
  public left: BinaryTreeNode<T> | null = null;
  public right: BinaryTreeNode<T> | null = null;

  constructor(public readonly val: T) {}
}

export class BinaryTree<T> {
  private _root: BinaryTreeNode<T> | null = null;

  constructor(private comparator: (a: T, b: T) => number) {}

  get root() {
    return this._root;
  }

  get listFromBinarySearchTree() {
    const recursivelyAddToList = (node: BinaryTreeNode<T> | null, list: T[]): T[] => {
      return node ? [
        ...recursivelyAddToList(node.left, list),
        node.val,
        ...recursivelyAddToList(node.right, list),
      ]: list
    } 

    return recursivelyAddToList(this.root, []);
  }

  public has(val: T): boolean{
    const recursivelyFind = (node: BinaryTreeNode<T> | null): boolean => {
      const isFail = node === null
      const isFound = node && this.comparator(val, node.val) === 0;
      const isGoLeft = node && this.comparator(val, node.val) < 0
      const isGoRight = node && this.comparator(val, node.val) > 0

      if (isFail) return false;
      else if (isFound) return true;
      else if (isGoLeft) return recursivelyFind(node.left);
      else if (isGoRight) return recursivelyFind(node.right);
      else throw 'condition not handled';
    }

    return recursivelyFind(this.root);
  }

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

    this._root = addRecursively(this._root);
  }
}
