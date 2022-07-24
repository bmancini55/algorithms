import { expect } from "chai";
import { insert } from "../../../src/binary-tree/Recursive/Insert";
import { del } from "../../../src/binary-tree/Recursive/Delete";

describe("Binary Tree", () => {
	describe("Recursive", () => {
		describe(".delete", () => {
			it("should delete single node", () => {
				let root = insert(null, 4);
				root = del(root, 4);
				expect(root).to.be.null;
			});

			it("should remove leaf", () => {
				let root = insert(null, 4);
				root = insert(root, 3);
				root = del(root, 3);
				expect(root.left).to.be.null;
			});

			it("should remove left parent", () => {
				let root = insert(null, 4);
				root = insert(root, 3);
				root = insert(root, 2);
				root = del(root, 3);
				expect(root.left.key).to.equal(2);
				expect(root.left.parent).to.equal(root);
			});

			it("should remove right parent", () => {
				let root = insert(null, 4);
				root = insert(root, 5);
				root = insert(root, 6);
				root = del(root, 5);
				expect(root.right.key).to.equal(6);
				expect(root.right.parent).to.equal(root);
			});

			it("should replace with predecessor", () => {
				let root = insert(null, 4);
				root = insert(root, 2);
				root = insert(root, 3);
				root = insert(root, 5);
				root = del(root, 4);
				expect(root.key).to.equal(3);
				expect(root.parent).to.be.null;
				expect(root.left.key).to.equal(2);
				expect(root.left.parent).to.equal(root);
			});

			it("should replace with predecessor", () => {
				let root = insert(null, 1);
				root = insert(root, 5);
				root = insert(root, 3);
				root = insert(root, 2);
				root = insert(root, 4);
				root = del(root, 3);
				expect(root.right.left.key).to.equal(2);
			});
		});
	});
});
