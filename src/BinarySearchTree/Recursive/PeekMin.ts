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
 * Finds the min value in the tree staring at the root.
 * Executes in θ(height) which has average complexity of O(log n) and
 * a worst case runtime of O(n).
 */
export function peekMin<T>(root: Node<T>): Node<T> {
	if (!root) return root;

	while (root.left) {
		root = root.left;
	}
	return root;
}
