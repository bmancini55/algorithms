/**
 * Bubble sort repeatedly swaps items starting at the first item. It has a
 * runtime complexity of O(n^2). This is the simplified version that
 * sorts all elements with each pass. A slight modification can be used
 * to decrease that with each pass the tail of the end of the array will
 * be sorted.  So the `j` loop can subtract `i` as the max value.
 * @param arr An array of numbers
 */
export function bubbleSort(arr: number[]) {
	arr = arr.slice(); // do not mutate original array

	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, j - 1, j);
			}
		}
	}
	return arr;
}

export function swap(arr: number[], i: number, j: number) {
	const t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
}
