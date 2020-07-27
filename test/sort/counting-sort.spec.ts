import { runFixtures } from "../test-utils";
import { countingSort } from "../../src/sort/counting-sort";

describe("counting sort", () => {
	let fixtures = [
		["sort", [[1]], [1]],
		["sort", [[1, 2, 1]], [1, 1, 2]],
		["sort", [[1, 2, 1, 2, 3, 1]], [1, 1, 1, 2, 2, 3]],
		['sort', [[5, 1, 2, 1, 2, 3, 1, 4, 5, 2]], [1, 1, 1, 2, 2, 2, 3, 4, 5, 5]], // prettier-ignore
		['sort', [[19, 5, 27, 13, 48, 343, 89]], [5, 13, 19, 27, 48, 89, 343]], // prettier-ignore
	];

	runFixtures(countingSort, fixtures);
});
