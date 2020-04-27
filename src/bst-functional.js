module.exports = {
  search,
  insertNode,
  printOrdered,
  successorNode,
  deleteNode,
};

class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
}

function search(root, key) {
  // base cases: root null or root matches key
  if (!root || root.key === key) return root;

  // key greater than root
  if (key > root.key) return search(root.right, key);

  // key less than root
  if (key < root.key) return search(root.left, key);
}

function insertNode(node, key) {
  // if tree is empty, return the new node
  if (!node) return new Node(key);

  // recurse to a leaf position
  if (key < node.key) {
    node.left = insertNode(node.left, key);
  } else if (key > node.key) {
    node.right = insertNode(node.right, key);
  }

  return node;
}

function printOrdered(root) {
  if (!root) return;
  printOrdered(root.left);
  console.log(root.key);
  printOrdered(root.right);
}

function successorNode(node) {
  let current = node;
  while (node.left) {
    current = node.left;
  }
  return current;
}

function deleteNode(root, key) {
  // base
  if (!root) return root;

  // if key is smaller than the root then adjust left subtree
  if (key < root.key) {
    root.left = deleteNode(root.left, key);
    return root;
  }

  // if key is greater than the root then adjust right subtree
  if (key > root.key) {
    root.right = deleteNode(root.right, key);
    return root;
  }

  // we found our node to delete...

  // condition 1 or 2...
  if (!root.left) {
    return root.right;
  } else if (!root.right) {
    return root.left;
  }

  // node has two children, replace with successor
  let successor = successorNode(root.right);
  root.key = successor.key;

  // delete the sucessor node
  root.right = deleteNode(root.right, successor.key);

  return root;
}
