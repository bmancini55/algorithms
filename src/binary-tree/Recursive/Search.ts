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
 * Searches the BST from the root looking for the specified key. Search
 * executes in θ(height) which has average complexity of O(log n) and
 * a worst case runtime of O(n).
 */
export function search<T>(root: Node<T>, key: T): Node<T> {
	// if not found return null;
	if (root === null) return null;

	// if we have a match, return the node
	if (root.key === key) return root;

	// if key is less than root, search left
	if (root.key > key) return search(root.left, key);

	// if key is greater than root, search right
	return search(root.right, key);
}
