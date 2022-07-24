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
 * Returns an array of all nodes in order of the key. Runtime of O(n).
 */
export function inorder<T>(root: Node<T>): Node<T>[] {
	const order: Node<T>[] = [];

	function traverse(node: Node<T>) {
		if (!node) return;

		if (node.left) traverse(node.left);
		order.push(node);
		if (node.right) traverse(node.right);
	}

	traverse(root);

	return order;
}
