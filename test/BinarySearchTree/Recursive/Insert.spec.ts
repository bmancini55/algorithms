import { expect } from "chai";
import { insert } from "../../../src/BinarySearchTree/Recursive/Insert";

describe("Binary Tree", () => {
	describe("Recursive", () => {
		describe("Insert", () => {
			it("should insert single", () => {
				let result = insert(null, 1);
				expect(result.key).to.equal(1);
				expect(result.parent).to.equal(null);
				expect(result.left).to.equal(null);
				expect(result.right).to.equal(null);
			});

			it("should insert left", () => {
				let root = insert(null, 2);
				insert(root, 1);
				expect(root.left.key).to.equal(1);
				expect(root.left.parent).to.equal(root);
				expect(root.left.left).to.equal(null);
				expect(root.left.right).to.equal(null);
			});

			it("should insert left", () => {
				let root = insert(null, 2);
				insert(root, 3);
				expect(root.right.key).to.equal(3);
				expect(root.right.parent).to.equal(root);
				expect(root.right.left).to.equal(null);
				expect(root.right.right).to.equal(null);
			});

			it("should insert left left", () => {
				let root = insert(null, 3);
				insert(root, 2);
				insert(root, 1);
				expect(root.left.left.key).to.equal(1);
				expect(root.left.left.parent.parent).to.equal(root);
			});

			it("should insert right left", () => {
				let root = insert(null, 4);
				insert(root, 2);
				insert(root, 3);
				expect(root.left.right.key).to.equal(3);
				expect(root.left.right.parent.parent).to.equal(root);
			});
		});
	});
});
