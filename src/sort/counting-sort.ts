/**
 * Counting sort is a non-comparison sort for integers with runtime of
 * O(n + k) where k is the range of integer key values. The algorithm
 * uses a three step process where we first create a histogram of each
 * value. We then calculate the prefix sum (which acts as the start
 * index for the key).  We then create the output array.
 *
 * This is a generalized version where counting sort is based ono the
 * entire size of the input. The values must be positive.
 * @param input input array of positive integers
 */
export function countingSort(input: number[]): number[] {
	// Calculates the size of the input based on the max value in the
	// input data set.
	let size = Math.max(...input);

	// Construct an array the size of of values from 0 to the max value
	// in the input set.
	let hist = new Array(size).fill(0);

	// Construct the histogram of values in the input array
	for (const val of input) {
		hist[val] += 1;
	}

	// Next we compute a prefix sum for each value in the histogram by
	// successively incrementing the start count. by the previous value
	// in the hisogram.
	let total = 0;
	for (let i = 0; i < hist.length; i++) {
		let count = hist[i];
		hist[i] = total;
		total += count;
	}

	// Construct an output array where we will rewrite our values based
	// on the prefix sums.
	let output = new Array(input.length);

	// Finally, iterate the input items and use the start position found
	// in the hist array to place the value. We then increment the start
	// position for the next number with the same radix digit
	for (const val of input) {
		// Construct the output array based on the start position for
		// the radix digit
		output[hist[val]] = val;

		// Increment the next start position
		hist[val] += 1;
	}

	return output;
}
