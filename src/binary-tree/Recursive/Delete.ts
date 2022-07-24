import { predecessor } from "./Predecessor";

export class Node<T> {
	public key: T;
	public left: Node<T>;
	public right: Node<T>;
	public parent: Node<T>;

	constructor(key: T) {
		this.key = key;
		this.parent = null;
		this.left = null;
		this.right = null;
	}
}

/**
 * Searches for the node matching the key and then deletes it
 * and returns the new root. Overage runtime of O(log n) and worst
 * case run time of O(n). Returns the new root node.
 */
export function del<T>(root: Node<T>, key: T): Node<T> {
	if (!root) return root;

	// search left
	if (key < root.key) {
		root.left = del(root.left, key);
		if (root.left) root.left.parent = root;
	}

	// search right
	else if (key > root.key) {
		root.right = del(root.right, key);
		if (root.right) root.right.parent = root;
	}

	// otherwise
	else {
		// has zero or one child
		if (root.left == null) {
			let child = root.right;
			root.parent = null;
			root.left = null;
			root.right = null;
			return child;
		} else if (root.right === null) {
			let child = root.left;
			root.parent = null;
			root.left = null;
			root.right = null;
			return child;
		}

		// has with two children, we need to find the predecessor
		let node = predecessor(root);

		// swap predecessor
		root.key = node.key;

		// delete the predecessor node
		root.left = del(root.left, node.key);
	}

	return root;
}
