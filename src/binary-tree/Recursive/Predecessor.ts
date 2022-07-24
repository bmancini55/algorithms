import { peekMax } from "./PeekMax";

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
 * Finds the predecessor of the specified key
 *
 * Executes in θ(height) which has average complexity of O(log n) and
 * a worst case runtime of O(n).
 *
 * @param {BstNode} root
 * @returns {BstNode}
 */
export function predecessor<T>(root: Node<T>): Node<T> {
	if (!root) return root;

	if (root.left) {
		return peekMax(root.left);
	}

	let parent = root.parent;
	while (parent && root.key < parent.key) {
		parent = parent.parent;
	}

	return parent;
}
