import { expect } from "chai";
import { insert } from "../../../src/BinarySearchTree/Recursive/Insert";
import { peekMax } from "../../../src/BinarySearchTree/Recursive/PeekMax";

describe("Binary Tree", () => {
	describe("Recursive", () => {
		describe("PeekMax", () => {
			it("should return null when empty", () => {
				expect(peekMax(null)).to.be.null;
			});

			it("should find the max with left tree", () => {
				let root = insert(null, 5);
				insert(root, 4);
				insert(root, 3);
				let result = peekMax(root);
				expect(result.key).to.equal(5);
			});

			it("should find the max with right tree", () => {
				let root = insert(null, 3);
				insert(root, 5);
				insert(root, 4);
				insert(root, 6);
				let result = peekMax(root);
				expect(result.key).to.equal(6);
			});
		});
	});
});
