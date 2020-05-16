/**
 * Insertion sort iterates from 1 to n and moves the i-th i to the best location
 * but looking back to i to 0. To move an item it will perform swap operations
 * until the item is in the correct place. Insertion sort has a quadratic
 * runtime O(n^2).
 * @param arr
 */
export function insertionSort(arr: number[]): number[] {
	arr = arr.slice();
	const n = arr.length;
	for (let i = 1; i < n; i++) {
		for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
			swap(arr, j - 1, j);
		}
	}
	return arr;
}

export function swap(arr: number[], i: number, j: number) {
	const t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
}
