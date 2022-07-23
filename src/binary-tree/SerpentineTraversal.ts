import { networkInterfaces } from "os";

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
 * Given a binary tree, we want to perform a depth first traversal of the tree however, each level
 * reverses direction. So for instance a tree
 *    A
 *  B    C
 * D E  F G
 *
 * would result in the traversal:
 * [A, C, B, D, E, F, G]
 * @param tree
 */
export function serpentineTraversal<T>(tree: BinaryTree<T>): T[] {
	const result: T[] = [];
	if (!tree) return result;

	let current: BinaryTree<T>[] = [tree];
	let next: BinaryTree<T>[] = [];
	let dir = 0;

	while (current.length) {
		const node = current.pop();
		result.push(node.value);
		if (dir === 0) {
			if (node.left) next.push(node.left);
			if (node.right) next.push(node.right);
		} else {
			if (node.right) next.push(node.right);
			if (node.left) next.push(node.left);
		}

		if (!current.length) {
			current = next;
			next = [];
			dir ^= 1;
		}
	}
	return result;
}
