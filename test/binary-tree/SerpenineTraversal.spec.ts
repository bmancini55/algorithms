import { expect } from "chai";
import {
	BinaryTree,
	serpentineTraversal,
} from "../../src/binary-tree/SerpentineTraversal";

describe("Binary Tree", () => {
	describe("Serpentine Traversal", () => {
		it("undefined", () => {
			const input = undefined;
			const actual = serpentineTraversal(input);
			const expected = [];
			expect(actual).to.deep.equal(expected);
		});

		it("single node", () => {
			const input = new BinaryTree("a");
			const actual = serpentineTraversal(input);
			const expected = ["a"];
			expect(actual).to.deep.equal(expected);
		});

		it("single node with left child", () => {
			const input = new BinaryTree("a", new BinaryTree("b"));
			const actual = serpentineTraversal(input);
			const expected = ["a", "b"];
			expect(actual).to.deep.equal(expected);
		});

		it("single node with right child", () => {
			const input = new BinaryTree("a", undefined, new BinaryTree("b"));
			const actual = serpentineTraversal(input);
			const expected = ["a", "b"];
			expect(actual).to.deep.equal(expected);
		});

		it("single node with two children", () => {
			const input = new BinaryTree(
				"a",
				new BinaryTree("b"),
				new BinaryTree("c")
			);
			const actual = serpentineTraversal(input);
			const expected = ["a", "c", "b"];
			expect(actual).to.deep.equal(expected);
		});

		it("balanced tree", () => {
			const input = new BinaryTree(
				"a",
				new BinaryTree("b", new BinaryTree("d"), new BinaryTree("e")),
				new BinaryTree("c", new BinaryTree("f"), new BinaryTree("g"))
			);
			const actual = serpentineTraversal(input);
			const expected = ["a", "c", "b", "d", "e", "f", "g"];
			expect(actual).to.deep.equal(expected);
		});

		it("balanced tree", () => {
			const input = new BinaryTree(
				"a",
				new BinaryTree("b", new BinaryTree("d"), new BinaryTree("e")),
				new BinaryTree("c", new BinaryTree("f"), new BinaryTree("g"))
			);
			const actual = serpentineTraversal(input);
			const expected = ["a", "c", "b", "d", "e", "f", "g"];
			expect(actual).to.deep.equal(expected);
		});

		it("left imbalanced", () => {
			const input = new BinaryTree(
				"a",
				new BinaryTree(
					"b",
					new BinaryTree(
						"d",
						new BinaryTree("e", new BinaryTree("f"))
					)
				),
				new BinaryTree("c")
			);
			const actual = serpentineTraversal(input);
			const expected = ["a", "c", "b", "d", "e", "f"];
			expect(actual).to.deep.equal(expected);
		});
	});
});
