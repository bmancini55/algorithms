/**
 * Floyds method for heap construction which starts at the first parent and
 * restores the heap property by bubbling down. This executes in O(n).
 * @param arr
 */
export function heapify(arr: number[]): number[] {
	const heap = arr.slice();
	const first = Math.floor(arr.length / 2);
	for (let i = first; i >= 0; i--) {
		bubbleDown(heap, i);
	}
	return heap;
}

/**
 * ExtracMin operation takes the top element, swaps the last element into
 * the first position and executes the heap restoration, which runs in
 * logarithmic time.
 * @param heap
 */
export function extractMin(heap: number[]): number {
	const min = heap[0];
	heap[0] = heap[heap.length - 1];
	heap.pop();
	bubbleDown(heap, 0);
	return min;
}

/**
 * Bubble down finds the best child (or none) and performs a swap with
 * the best child. The best child is used to ensure that hte heap property
 * is maintained after the swap. When a swap is performed, a recursive call
 * is performed to bubble down the value.
 * @param heap
 * @param i
 */
export function bubbleDown(heap: number[], i: number) {
	const left = 2 * i + 1;
	const right = 2 * i + 2;
	let best = i;

	if (heap[left] && heap[left] < heap[best]) best = left;
	if (heap[right] && heap[right] < heap[best]) best = right;

	if (best !== i) {
		swap(heap, i, best);
		bubbleDown(heap, best);
	}
}

/**
 * Implements heap sort which is similar to selection sort, except we use
 * the extractMin feature of a heap to make the selection of hte next smallest
 * number faster. This executed in linearithmetic time O(n log n).  Note thate
 * Floyds method for heap construction is used which executes in O(n).
 * @param arr
 */
export function heapSort(arr: number[]) {
	const result = arr.slice();
	const n = arr.length;
	const heap = heapify(arr.slice());
	for (let i = 0; i < n; i++) {
		result[i] = extractMin(heap);
	}
	return result;
}

export function swap(arr: number[], i: number, j: number) {
	const t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
}
