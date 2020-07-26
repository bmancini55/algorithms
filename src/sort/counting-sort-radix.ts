/**
 * Counting sort is a non-comparison sort for integers with runtime of
 * O(n + k) where k is the range of integer key values. The algorithm
 * uses a three step process where we first create a histogram of each
 * value. We then calculate the prefix sum (which acts as the start
 * index for the key).  We then create the output array.
 * @param input input array of positive integers
 * @param digit the digit we are sorting by
 * @param radix the radix for the digit
 */
export function countingSort(
	input: number[],
	digit: number,
	radix: number
): number[] {
	// For the provided input value, calculate the key based on the
	// radix and digit. For example a value of 147 with a digit of 1
	// and a radix of 10 would return 4.  For a value of 12 with a digit
	// of 2 and a radix of 2 would return 1.
	let calcRadixDigit = (val: number) =>
		Math.floor((val / radix ** digit) % radix);

	// Construct an array the size of the radix and zero fill it. We will
	// use this array to hold our histogram values.
	let hist = new Array(radix).fill(0);

	// Construct the histogram of values by obtaining the radix value
	// for our target digit for each item in the input array. For
	// example if we are counting the 10's position for a radix 10 and
	// input array [143, 174, 241] we would have 4=2, 7=1 as the outputs.
	for (let i = 0; i < input.length; i++) {
		hist[calcRadixDigit(input[i])] += 1;
	}

	// Next we compute a prefix sum for each value in the histogram by
	// successively incrementing the start count. by the previous value
	// in the hisogram.
	let total = 0;
	for (let i = 0; i < hist.length; i++) {
		let counti = hist[i];
		hist[i] = total;
		total += counti;
	}

	// Construct an output array where we will rewrite our values based
	// on the prefix sums.
	let output = new Array(input.length);

	// Finally, iterate the input items and use the start position found
	// in the hist array to place the value. We then increment the start
	// position for the next number with the same radix digit
	for (const val of input) {
		// Obtain the radix digit for the value
		const radixDigit = calcRadixDigit(val);

		// Construct the output array based on the start position for
		// the radix digit
		output[hist[radixDigit]] = val;

		// Increment the next start position
		hist[radixDigit] += 1;
	}

	return output;
}
