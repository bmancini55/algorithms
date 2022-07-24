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
 * Inserts a new node with a given key into the BST. Returns the
 * original unchanged root of the BST. Run time executes in θ(height)
 * and has an average complexity of O(log n) and a worst case runtime
 * of O(n).
 */
export function insert<T>(root: Node<T>, key: T): Node<T> {
	// when no node, return new root
	if (!root) {
		return new Node(key);
	}

	// if key <= root, recur to left
	if (key <= root.key) {
		let node = insert(root.left, key);
		node.parent = root;
		root.left = node;
	}

	// if key >= root, recur to right
	else if (key >= root.key) {
		let node = insert(root.right, key);
		node.parent = root;
		root.right = node;
	}

	// finally return original unchanged node
	return root;
}
