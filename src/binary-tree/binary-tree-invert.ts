export class BinaryTree<T> {
	public value: T;
	public left: BinaryTree<T>;
	public right: BinaryTree<T>;

	constructor(value: T, left?: BinaryTree<T>, right?: BinaryTree<T>) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

/**
 * Recursively inverts a binary tree.  At each layer we swap the left
 * and right nodes by calling invert.
 * @param root
 */
export function invert<T>(root: BinaryTree<T>): BinaryTree<T> {
	if (!root) return undefined;
	const result = new BinaryTree(root.value);
	result.left = invert(root.right);
	result.right = invert(root.left);
	return result;
}
