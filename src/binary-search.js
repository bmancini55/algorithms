module.exports.search = search;
module.exports.search2 = search2;
module.exports.searchRecursive = searchRecursive;
module.exports.searchRecursive2 = searchRecursive2;
module.exports.lowerBound = lowerBound;
module.exports.upperBound = upperBound;

/**
 * Interative (r exclusive) algorithm that finds the index of the target value
 * in a sorted array. Returns -1 if the value is not found.
 *
 * @param {number[]} a sorted array
 * @param {number} l left index
 * @param {number} r right index exclusive
 * @param {number} x target value
 * @returns {number} the index of the value in the array
 */
function search(a, l, r, x) {
	while (l < r) {
		let mid = Math.floor((r + l) / 2);
		if (a[mid] === x) return mid;
		if (x < a[mid]) r = mid;
		if (x > a[mid]) l = mid + 1;
	}
	return -1;
}

/**
 * Interative (r exclusive) algorithm that finds the index of the target value
 * in a sorted array. Returns -1 if the value is not found.
 *
 * @param {number[]} a sorted array
 * @param {number} l left index
 * @param {number} r right index inclusive
 * @param {number} x target value
 * @returns {number} the index of the value in the array
 */
function search2(a, l, r, x) {
	while (l <= r) {
		const mid = Math.floor((r + l) / 2);
		if (a[mid] === x) return mid;
		if (x < a[mid]) r = mid - 1;
		if (x > a[mid]) l = mid + 1;
	}
	return -1;
}

/**
 * Recursively (r exclusive) algoritthm that finds the index of the target value
 * in the array. Returns -1 if the value is not found.
 *
 * @param {number[]} a sorted array
 * @param {number} l left index
 * @param {number} r right index exclusive
 * @param {number} x target value
 * @returns {number} the index of the value in the array
 */
function searchRecursive(a, l, r, x) {
	if (l < r) {
		let mid = Math.floor((r + l) / 2);
		if (a[mid] === x) return mid;
		if (x < a[mid]) return searchRecursive(a, l, mid, x);
		if (x > a[mid]) return searchRecursive(a, mid + 1, r, x);
	}
	return -1;
}

/**
 *
 * @param {*} a
 * @param {*} l
 * @param {*} r
 * @param {*} x
 */
function searchRecursive2(a, l, r, x) {
	if (l > r) return -1;
	const mid = Math.floor((r + l) / 2);
	if (a[mid] === x) return mid;
	if (x < a[mid]) return searchRecursive2(a, l, mid - 1, x);
	if (x > a[mid]) return searchRecursive2(a, mid + 1, r, x);
}

/**
 * With a sorted array, returns the index of the first value
 * that is greather than or equal to the search value x.
 *
 * Returns 0 when entire array is above the value.
 * Returns -1 when value is above entire array.
 *
 * @param {number[]} a sorted array
 * @param {number} l left index
 * @param {number} r right index
 * @param {number} x target value
 * @returns {number} index of first value above the target
 */
function lowerBound(a, l, r, x) {
	// return -1 when x is above array
	if (x > a[a.length - 1]) return -1;

	// return first index when x is below array
	if (x < a[0]) return 0;

	while (l < r) {
		let mid = Math.floor((r + l) / 2);
		if (a[mid] === x) return mid;
		if (a[mid] < x) l = mid + 1;
		if (a[mid] > x) r = mid;
	}
	return l;
}

/**
 * With a sorted array, returns the index of the last value
 * that is less than or equal to the search value x.
 *
 * Returns -1 when entire array is above the value.
 * Returns last index when entire array is below the value.
 *
 * @param {number[]} a array of values
 * @param {number} l left index
 * @param {number} r right index
 * @param {number} x search value
 * @returns index of position <= x
 */
function upperBound(a, l, r, x) {
	// return - 1 when x is below array
	if (x < a[0]) return -1;

	// return last index when x is above array
	if (x > a[a.length - 1]) return a.length - 1;

	// shrink array until we find the value
	while (l < r) {
		let mid = Math.floor((r + l) / 2);
		if (a[mid] === x) return mid;
		if (a[mid] < x) l = mid + 1;
		if (a[mid] > x) r = mid;
	}
	return l - 1;
}
