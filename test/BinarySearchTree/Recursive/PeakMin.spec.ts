import { expect } from "chai";
import { insert } from "../../../src/BinarySearchTree/Recursive/Insert";
import { peekMin } from "../../../src/BinarySearchTree/Recursive/PeekMin";

describe("Binary Tree", () => {
	describe("Recursive", () => {
		describe("PeekMin", () => {
			it("should return null when empty", () => {
				expect(peekMin(null)).to.be.null;
			});

			it("should find the min with right tree", () => {
				let root = insert(null, 5);
				insert(root, 6);
				insert(root, 7);
				let result = peekMin(root);
				expect(result.key).to.equal(5);
			});

			it("should find the min with left tree", () => {
				let root = insert(null, 5);
				insert(root, 2);
				insert(root, 3);
				insert(root, 1);
				let result = peekMin(root);
				expect(result.key).to.equal(1);
			});
		});
	});
});
