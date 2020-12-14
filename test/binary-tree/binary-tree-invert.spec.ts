import { equal } from "assert";
import { expect } from "chai";
import { invert, BinaryTree } from "../../src/binary-tree/binary-tree-invert";

function equals<T>(a: BinaryTree<T>, b: BinaryTree<T>): boolean {
	if (!a && !b) return true;
	if ((!a && b) || (a && !b)) return false;
	return (
		a.value === b.value &&
		equals(a.left, b.left) &&
		equals(a.right, b.right)
	);
}

describe("Binary Tree Invert", () => {
	it("undefined", () => {
		const input = undefined;
		const actual = invert(input);
		const expected = undefined;
		expect(equals(actual, expected)).to.equal(true);
	});

	it("single node", () => {
		const input = new BinaryTree(1);
		const actual = invert(input);
		const expected = new BinaryTree(1);
		expect(equals(actual, expected)).to.equal(true);
	});

	it("left node", () => {
		const input = new BinaryTree(1, new BinaryTree(2));
		const actual = invert(input);
		const expected = new BinaryTree(1, undefined, new BinaryTree(2));
		expect(equals(actual, expected)).to.equal(true);
	});

	it("right node", () => {
		const input = new BinaryTree(1, undefined, new BinaryTree(2));
		const actual = invert(input);
		const expected = new BinaryTree(1, new BinaryTree(2));
		expect(equals(actual, expected)).to.equal(true);
	});

	it("three node", () => {
		const input = new BinaryTree(1, new BinaryTree(2), new BinaryTree(3));
		const actual = invert(input);
		const expected = new BinaryTree(
			1,
			new BinaryTree(3),
			new BinaryTree(2)
		);
		expect(equals(actual, expected)).to.equal(true);
	});

	it("four node", () => {
		const input = new BinaryTree(
			1,
			new BinaryTree(2, new BinaryTree(4)),
			new BinaryTree(3)
		);
		const actual = invert(input);
		const expected = new BinaryTree(
			1,
			new BinaryTree(3),
			new BinaryTree(2, undefined, new BinaryTree(4))
		);
		expect(equals(actual, expected)).to.equal(true);
	});

	it("four node", () => {
		const input = new BinaryTree(
			1,
			new BinaryTree(2, undefined, new BinaryTree(4)),
			new BinaryTree(3)
		);
		const actual = invert(input);
		const expected = new BinaryTree(
			1,
			new BinaryTree(3),
			new BinaryTree(2, new BinaryTree(4), undefined)
		);
		expect(equals(actual, expected)).to.equal(true);
	});

	it("four node", () => {
		const input = new BinaryTree(
			1,
			new BinaryTree(2),
			new BinaryTree(3, new BinaryTree(4))
		);
		const actual = invert(input);
		const expected = new BinaryTree(
			1,
			new BinaryTree(3, undefined, new BinaryTree(4)),
			new BinaryTree(2)
		);
		expect(equals(actual, expected)).to.equal(true);
	});

	it("four node", () => {
		const input = new BinaryTree(
			1,
			new BinaryTree(2),
			new BinaryTree(3, undefined, new BinaryTree(4))
		);
		const actual = invert(input);
		const expected = new BinaryTree(
			1,
			new BinaryTree(3, new BinaryTree(4)),
			new BinaryTree(2)
		);
		expect(equals(actual, expected)).to.equal(true);
	});
});
