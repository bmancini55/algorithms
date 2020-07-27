import { runFixtures } from "../test-utils";
import { radixSort } from "../../src/sort/radix-sort";

let fixtures = [
	["sorts even", [[5, 3, 6, 7, 2, 1, 8, 4], 10], [1, 2, 3, 4, 5, 6, 7, 8]],
	["sorts odd", [[5, 3, 6, 7, 2, 1, 4], 10], [1, 2, 3, 4, 5, 6, 7]],
	["sorts with dup", [[5, 4, 3, 2, 4, 1], 10], [1, 2, 3, 4, 4, 5]],
	[
		"larger input",
		[[543, 44, 3, 44, 22, 22, 3, 4, 1], 10],
		[1, 3, 3, 4, 22, 22, 44, 44, 543],
	],
	[
		"2-radix",
		[[543, 44, 3, 44, 22, 22, 511, 512, 3, 4, 1], 2],
		[1, 3, 3, 4, 22, 22, 44, 44, 511, 512, 543],
	],
	[
		"16-radix",
		[[543, 44, 3, 44, 22, 22, 3, 4, 15, 16, 1], 16],
		[1, 3, 3, 4, 15, 16, 22, 22, 44, 44, 543],
	],
];

describe("radixSort", () => {
	runFixtures(radixSort, fixtures);
});
