const { expect } = require('chai');
const { search } = require('../src/binary-search');
const { search2 } = require('../src/binary-search');
const { searchRecursive } = require('../src/binary-search');
const { searchRecursive2 } = require('../src/binary-search');
const { lowerBound } = require('../src/binary-search');
const { upperBound } = require('../src/binary-search');

describe('binary search - iterative, r exclusive', () => {
	describe('.search iterative, r exclusive', () => {
		it('should return -1 when below', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 0;
			expect(search(a, 0, a.length, x)).to.equal(-1);
		});

		it('should return -1 when not found', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 3;
			expect(search(a, 0, a.length, x)).to.equal(-1);
		});

		it('should return first value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 1;
			expect(search(a, 0, a.length, x)).to.equal(0);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 4;
			expect(search(a, 0, a.length, x)).to.equal(1);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 8;
			expect(search(a, 0, a.length, x)).to.equal(2);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 12;
			expect(search(a, 0, a.length, x)).to.equal(3);
		});

		it('should return last value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 21;
			expect(search(a, 0, a.length, x)).to.equal(4);
		});

		it('should return -1 above', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 22;
			expect(search(a, 0, a.length, x)).to.equal(-1);
		});
	});

	describe('.search iterative, r inclusive', () => {
		it('should return -1 when below', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 0;
			expect(search2(a, 0, a.length - 1, x)).to.equal(-1);
		});

		it('should return -1 when not found', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 3;
			expect(search2(a, 0, a.length - 1, x)).to.equal(-1);
		});

		it('should return first value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 1;
			expect(search2(a, 0, a.length - 1, x)).to.equal(0);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 4;
			expect(search2(a, 0, a.length - 1, x)).to.equal(1);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 8;
			expect(search2(a, 0, a.length - 1, x)).to.equal(2);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 12;
			expect(search2(a, 0, a.length - 1, x)).to.equal(3);
		});

		it('should return last value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 21;
			expect(search2(a, 0, a.length - 1, x)).to.equal(4);
		});

		it('should return -1 above', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 22;
			expect(search2(a, 0, a.length - 1, x)).to.equal(-1);
		});
	});

	describe('binary search - recursive, r exclusive', () => {
		it('should return -1 when below', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 0;
			expect(searchRecursive(a, 0, a.length, x)).to.equal(-1);
		});

		it('should return -1 when not found', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 3;
			expect(searchRecursive(a, 0, a.length, x)).to.equal(-1);
		});

		it('should return first value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 1;
			expect(searchRecursive(a, 0, a.length, x)).to.equal(0);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 4;
			expect(searchRecursive(a, 0, a.length, x)).to.equal(1);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 8;
			expect(searchRecursive(a, 0, a.length, x)).to.equal(2);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 12;
			expect(searchRecursive(a, 0, a.length, x)).to.equal(3);
		});

		it('should return last value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 21;
			expect(searchRecursive(a, 0, a.length, x)).to.equal(4);
		});

		it('should return -1 above', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 22;
			expect(searchRecursive(a, 0, a.length, x)).to.equal(-1);
		});
	});

	describe('binary search - recursive, r inclusive', () => {
		it('should return -1 when below', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 0;
			expect(searchRecursive2(a, 0, a.length - 1, x)).to.equal(-1);
		});

		it('should return -1 when not found', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 3;
			expect(searchRecursive2(a, 0, a.length - 1, x)).to.equal(-1);
		});

		it('should return first value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 1;
			expect(searchRecursive(a, 0, a.length - 1, x)).to.equal(0);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 4;
			expect(searchRecursive2(a, 0, a.length - 1, x)).to.equal(1);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 8;
			expect(searchRecursive2(a, 0, a.length - 1, x)).to.equal(2);
		});

		it('should return mid value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 12;
			expect(searchRecursive2(a, 0, a.length - 1, x)).to.equal(3);
		});

		it('should return last value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 21;
			expect(searchRecursive2(a, 0, a.length - 1, x)).to.equal(4);
		});

		it('should return -1 above', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 22;
			expect(searchRecursive2(a, 0, a.length - 1, x)).to.equal(-1);
		});
	});

	describe('.lowerBound', () => {
		it('should return 0 when below the array', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 0;
			expect(lowerBound(a, 0, a.length, x)).to.equal(0);
		});

		it('should return first position', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 1;
			expect(lowerBound(a, 0, a.length, x)).to.equal(0);
		});

		it('should return values above missing value', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 5;
			expect(lowerBound(a, 0, a.length, x)).to.equal(2);
		});

		it('should return values at a number', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 8;
			expect(lowerBound(a, 0, a.length, x)).to.equal(2);
		});

		it('should return values at last position', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 21;
			expect(lowerBound(a, 0, a.length, x)).to.equal(4);
		});

		it('should return -1 when above the array', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 22;
			expect(lowerBound(a, 0, a.length, x)).to.equal(-1);
		});
	});

	describe('.upperBound', () => {
		it('should return -1 when before start', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 0;
			expect(upperBound(a, 0, a.length, x)).to.equal(-1);
		});

		it('should return hit on first', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 1;
			expect(upperBound(a, 0, a.length, x)).to.equal(0);
		});

		it('should return values below a threshold', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 15;
			expect(upperBound(a, 0, a.length, x)).to.equal(3);
		});

		it('should return values at a threshold', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 12;
			expect(upperBound(a, 0, a.length, x)).to.equal(3);
		});

		it('should return values at last position', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 21;
			expect(upperBound(a, 0, a.length, x)).to.equal(4);
		});

		it('should return all values when above last position', () => {
			let a = [1, 4, 8, 12, 21];
			let x = 25;
			expect(upperBound(a, 0, a.length, x)).to.equal(4);
		});
	});
});
