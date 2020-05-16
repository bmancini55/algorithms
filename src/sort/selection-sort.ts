/**
 * Selection sort iterates n number of times and finds the nth smallest number
 * by looking through the remaining items in the list. As a result it has a
 * runtime of O(n^2).
 * @param arr
 */
export function selectionSort(arr: number[]) {
	arr = arr.slice();
	let n = arr.length;
	let p = 0;

	// iterate n tumes
	for (let i = 0; i < n; i++) {
		// search for the min value in the remaining items
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		if (min !== i) {
			swap(arr, i, min);
		}
	}
	return arr;
}

export function swap(arr: number[], i: number, j: number) {
	const t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
}
