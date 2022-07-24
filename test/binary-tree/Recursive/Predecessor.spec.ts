import { expect } from "chai";
import { insert } from "../../../src/binary-tree/Recursive/Insert";
import { predecessor } from "../../../src/binary-tree/Recursive/Predecessor";

describe("Binary Tree", () => {
	describe("Recursive", () => {
		describe("Predecessor", () => {
			it("should return null when empty", () => {
				expect(predecessor(null)).to.be.null;
			});

			it("should return left predecessor", () => {
				let root = insert(null, 3);
				insert(root, 2);
				let result = predecessor(root);
				expect(result.key).to.equal(2);
			});

			it("should return parent predecessor", () => {
				let root = insert(null, 3);
				insert(root, 4);
				let result = predecessor(root.right);
				expect(result.key).to.equal(3);
			});

			it("should return grand parent predecessor", () => {
				let root = insert(null, 3);
				insert(root, 5);
				insert(root, 4);
				let result = predecessor(root.right.left);
				expect(result.key).to.equal(3);
			});
		});
	});
});
