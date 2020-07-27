import { countingSort } from "./counting-sort-radix";

/**
 * Radix sort using the LSB method to sort integers. This technique
 * sorts by successively calling counting sort on each digit of output.
 * In order to do this, it first finds the maximum number of digits in
 * the input array. It then calls countingSort for each digit using the
 * output as the input for the next round.
 *
 * Counting sort operates in O(n + r) where r is the "number of buckets"
 * or the radix in our case.
 *
 * We determine the maximum number of using Log(max)/Log(radix) to get
 * a number of rounds of Log_r(k) where k is the max value in the input
 * set.
 *
 * This means the overall runtime complexity is O(log_r(k)*(n+r)). If we
 * set the radix to the max value in the input set, then we obtain O(n)
 * runtime.
 *
 * @param input Array of numbers
 * @param radix Radix to use when calculating
 */
export function radixSort(input: number[], radix: number): number[] {
	// Find the max value in the input array, which is a O(n) operation
	// since it requires a full scan of the input array.
	let maxVal = 0;
	for (const val of input) {
		if (val > maxVal) maxVal = val;
	}

	// Calculate the max digit for the max value
	const maxDigit = Math.ceil(Math.log(maxVal) / Math.log(radix));

	// Sort by each digit using the LSB algorithm that starts at the
	// least significant bit and moves upwards
	let output = input;
	for (let digit = 0; digit <= maxDigit; digit++) {
		output = countingSort(output, digit, radix);
	}

	// Finally return the output
	return output;
}
