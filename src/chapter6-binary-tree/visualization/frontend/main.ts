import {
  BinarySearchTree,
  BinarySearchTreeNode,
} from '../../implementation/binary-search-tree';

type BinaryTreeNodeWithCalculations = BinarySearchTreeNode<number> & {
  level: number;
  index: number;
};

const binaryTree = new BinarySearchTree<number>(function (a, b) {
  return a - b;
});

function initBinaryTreeData() {
  binaryTree.add(10);
  binaryTree.add(5);
  binaryTree.add(0);
  binaryTree.add(8);
  binaryTree.add(15);
  binaryTree.add(20);
  binaryTree.add(12);
  binaryTree.add(9);
  binaryTree.add(-5);
  binaryTree.add(-10);
}

const getNodesList = () => {
  let list: BinaryTreeNodeWithCalculations[] = [];
  let queue: BinaryTreeNodeWithCalculations[] = binaryTree.root
    ? [{ ...binaryTree.root, level: 0, index: 0 }]
    : [];

  while (queue.length > 0) {
    const node = queue[0];
    const { index, level } = node;

    const childrenToAdd: BinaryTreeNodeWithCalculations[] = [
      node.left,
      node.right,
    ]
      .map((child, i) =>
        child
          ? {
              ...child,
              level: level + 1,
              index: 2 * index + 1 + i,
            }
          : null
      )
      .filter(child => child) as BinaryTreeNodeWithCalculations[]; // Remove null/undefined children

    list.push(node);

    queue = [...queue.slice(1), ...childrenToAdd];
  }

  list = list.sort((a, b) => a.index - b.index);

  return list;
};

const displayBinaryTree = () => {
  const getLastIndexOfLevel = (level: number) => Math.pow(2, level + 1) - 2;

  function getElementForDisplay(): HTMLElement {
    return document.querySelector('.display-binary-tree') as HTMLElement;
  }

  function getHtml() {
    const nodesList = getNodesList();
    const maxLevel = nodesList[nodesList.length - 1].level;
    const lastIndexAtMaxLevel = getLastIndexOfLevel(maxLevel);

    const nodesMap: { [key: number]: BinarySearchTreeNode<number> } =
      nodesList.reduce(
        (accum, node) => ({
          ...accum,
          [node.index]: node,
        }),
        {}
      );

    const indexToValueList = [];
    for (let i = 0; i <= lastIndexAtMaxLevel; i++) {
      indexToValueList[i] = i in nodesMap ? nodesMap[i].val : null;
    }
    let html = '<div>';
    for (let i = 0; i <= maxLevel; i++) {
      html += '<div class="row">';
      for (let j = Math.pow(2, i) - 1; j <= Math.pow(2, i + 1) - 2; j++) {
        const value = indexToValueList[j];
        const htmlClass = value === null ? 'node empty' : 'node';
        html += `<div class="${htmlClass}">${value}</div>`;
      }

      html += '</div>';
    }
    html += '</div>';

    return html;
  }

  const element = getElementForDisplay();

  element.innerHTML = getHtml();
};

function addButtonEventListener() {
  const buttonElement = document.querySelector('button') as HTMLButtonElement;

  buttonElement.addEventListener('click', function () {
    const inputElement = document.querySelector('input') as HTMLInputElement;
    const numberToAdd = Number(inputElement.value) || 0;

    binaryTree.add(numberToAdd);
    displayBinaryTree();
  });
}

addButtonEventListener();
initBinaryTreeData();
displayBinaryTree();
