import { expect } from "chai";
import { insert } from "../../../src/BinarySearchTree/Recursive/Insert";
import { search } from "../../../src/BinarySearchTree/Recursive/Search";

describe("Binary Tree", () => {
	describe("Recursive", () => {
		describe("Search", () => {
			it("should null when not found", () => {
				let root = insert(null, 5);
				insert(root, 3);
				insert(root, 10);
				insert(root, 4);
				insert(root, 8);
				let result = search(root, 1);
				expect(result).to.equal(null);
			});

			it("should return root", () => {
				let root = insert(null, 5);
				insert(root, 3);
				insert(root, 10);
				insert(root, 4);
				insert(root, 8);
				let result = search(root, 5);
				expect(result.key).to.equal(5);
			});

			it("should return left child", () => {
				let root = insert(null, 5);
				insert(root, 3);
				insert(root, 10);
				insert(root, 4);
				insert(root, 8);
				let result = search(root, 3);
				expect(result.key).to.equal(3);
			});

			it("should return right child", () => {
				let root = insert(null, 5);
				insert(root, 3);
				insert(root, 10);
				insert(root, 4);
				insert(root, 8);
				let result = search(root, 10);
				expect(result.key).to.equal(10);
			});

			it("should return left leaf", () => {
				let root = insert(null, 5);
				insert(root, 3);
				insert(root, 10);
				insert(root, 4);
				insert(root, 8);
				let result = search(root, 8);
				expect(result.key).to.equal(8);
			});

			it("should return right leaf", () => {
				let root = insert(null, 5);
				insert(root, 3);
				insert(root, 10);
				insert(root, 4);
				insert(root, 8);
				let result = search(root, 4);
				expect(result.key).to.equal(4);
			});
		});
	});
});
