import { expect } from "chai";
import { insert } from "../../../src/binary-tree/Recursive/Insert";
import { successor } from "../../../src/binary-tree/Recursive/Successor";

describe("Binary Tree", () => {
	describe("Recursive", () => {
		describe("Successor", () => {
			it("should return null when empty", () => {
				expect(successor(null)).to.be.null;
			});

			it("should return right successor", () => {
				let root = insert(null, 3);
				insert(root, 4);
				let result = successor(root);
				expect(result.key).to.equal(4);
			});

			it("should return parent successor", () => {
				let root = insert(null, 3);
				insert(root, 2);
				let result = successor(root.left);
				expect(result.key).to.equal(3);
			});

			it("should return grand parent successor", () => {
				let root = insert(null, 4);
				insert(root, 2);
				insert(root, 3);
				let result = successor(root.left.right);
				expect(result.key).to.equal(4);
			});
		});
	});
});
