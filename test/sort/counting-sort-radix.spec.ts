import { runFixtures } from "../test-utils";
import { countingSort } from "../../src/sort/counting-sort-radix";

describe("counting sort", () => {
	let fixtures = [
		["digit 0, radix 10", [[1], 0, 10], [1]],
		["digit 0, radix 10", [[1, 2, 1], 0, 10], [1, 1, 2]],
		["digit 0, radix 10", [[1, 2, 1, 2, 3, 1], 0, 10], [1, 1, 1, 2, 2, 3]],
		["digit 0, radix 10", [[1, 2, 1, 2, 3, 1], 0, 10], [1, 1, 1, 2, 2, 3]],
		['digit 0, radix 10', [[5, 1, 2, 1, 2, 3, 1, 4, 5, 2], 0, 10], [1, 1, 1, 2, 2, 2, 3, 4, 5, 5]], // prettier-ignore
		['digit 0, radix 10', [[19, 5, 27, 13, 48, 343, 89], 0, 10], [13, 343, 5, 27, 48, 19, 89]], // prettier-ignore
		['digit 1, radix 10', [[19, 5, 27, 13, 48, 343, 89], 1, 10], [5, 19, 13, 27, 48, 343, 89]], // prettier-ignore
		['digit 2, radix 10', [[19, 5, 27, 13, 48, 343, 89], 2, 10], [19, 5, 27, 13, 48, 89, 343]], // prettier-ignore
		["digit 0, radix 2", [[0, 1, 2, 3, 4], 0, 2], [0, 2, 4, 1, 3]],
		["digit 1, radix 2", [[0, 1, 2, 3, 4], 1, 2], [0, 1, 4, 2, 3]],
		["digit 2, radix 2", [[0, 1, 2, 3, 4], 2, 2], [0, 1, 2, 3, 4]],
	];

	runFixtures(countingSort, fixtures);
});
