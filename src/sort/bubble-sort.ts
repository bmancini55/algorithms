/**
 * Bubble sort repeatedly swaps items starting at the first item. It has a
 * runtime complexity of O(n^2). The optimized version below works by noting
 * that the end of the array is sorted first and everything after the last swap
 * is in the correct order.  As a result, we can reduce the size of the
 * operations until
 * @param arr An array of numbers
 */
export function bubbleSort(arr: number[]) {
	arr = arr.slice(); // do not mutate original array
	let lastSwap = -1;
	let n = arr.length;
	do {
		lastSwap = -1;
		for (let i = 0; i < n; i++) {
			if (arr[i - 1] > arr[i]) {
				swap(arr, i, i - 1);
				lastSwap = i;
			}
		}
	} while (lastSwap > -1);
	return arr;
}

export function swap(arr: number[], i: number, j: number) {
	const t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
}
