import { del } from "../binary-tree/Recursive/Delete";
import { insert } from "../binary-tree/Recursive/Insert";
import { peekMax } from "../binary-tree/Recursive/PeekMax";
import { peekMin } from "../binary-tree/Recursive/PeekMin";

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

export class Bst<T> {
	public root: Node<T>;
	public size: number = 0;

	public insert(key: T) {
		this.root = insert(this.root, key);
		this.size += 1;
	}

	public delete(key: T) {
		this.root = del(this.root, key);
		this.size -= 1;
	}

	public findMin(): T {
		const node = peekMin(this.root);
		return node?.key;
	}

	public findMax(): T {
		const node = peekMax(this.root);
		return node?.key;
	}

	public extractMin(): T {
		const node = peekMin(this.root);
		if (node) {
			this.delete(node.key);
		}
		return node.key;
	}

	public extractMax() {
		const node = peekMax(this.root);
		if (node) {
			this.delete(node.key);
		}
		return node.key;
	}
}

export class BstMedian<T> {
	public low: Bst<T>;
	public high: Bst<T>;

	constructor() {
		this.low = new Bst();
		this.high = new Bst();
	}

	/**
	 * Gets the size
	 */
	public get size() {
		return this.low.size + this.high.size;
	}

	/**
	 * Inserts a value into the median heap and maintains
	 * the invariant that the median is always the tip of
	 * the lower-half of values.
	 *
	 * This has runtime of O(log n).
	 */
	public insert(val: T) {
		median(this.low, this.high, val);
	}

	/**
	 * Finds the median value in constant runtime O(1).
	 * @returns {number}
	 */
	public findMedian(): T {
		return this.low.findMax();
	}
}

module.exports.BstMedian = BstMedian;

/**
 * Function maintains the median for a stream of numbers.
 * The median is maintained via two heaps that retain the
 * property that the size of the heaps are ~i/2. In particular
 * this heap maintains the invariant that the median is the
 * max value in the low number heap.
 *
 * For example, the low heap can at most have 1 more value
 * than the high heap.
 *
 * This function operates in runtime O(log n).
 */
function median<T>(low: Bst<T>, high: Bst<T>, val: T) {
	// insert into the low number heap if there are no values yet
	// or if the current value is lower than the max value in
	// the low number heap.
	if (!low.findMax() || val < low.findMax()) {
		low.insert(val);
	}
	// inserts into the high number value heap if the value is
	// greater than the max value in the low number heap
	else {
		high.insert(val);
	}

	// rebalance the max value into the high heap if it
	// has more than 1 value in it
	if (low.size > high.size + 1) {
		let val = low.extractMax();
		high.insert(val);
	}

	// rebalance the min value into the low heap if its
	// size is larger than the low heap.
	if (high.size > low.size) {
		let val = high.extractMin();
		low.insert(val);
	}
}
