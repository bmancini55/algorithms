import { expect } from "chai";
import { inorder } from "../../../src/BinarySearchTree/Recursive/InOrderTraversal";
import { insert } from "../../../src/BinarySearchTree/Recursive/Insert";

describe("Binary Tree", () => {
	describe("Recursive", () => {
		describe(".inorder", () => {
			it("null returns empty", () => {
				let root = null;
				let result = inorder(root);
				expect(result).to.deep.equal([]);
			});

			it("returns single", () => {
				let root = insert(null, 4);
				let result = inorder(root);
				let values = result.map(p => p.key);
				expect(values).to.deep.equal([4]);
			});

			it("should subtrees", () => {
				let root = insert(null, 4);
				insert(root, 2);
				insert(root, 1);
				insert(root, 3);
				insert(root, 6);
				insert(root, 5);
				insert(root, 7);
				let result = inorder(root);
				let values = result.map(p => p.key);
				expect(values).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
			});
		});
	});
});
