const {getEvenNumbers} = require('./number.js') ;

test('returns even numbers from an array', () => {
  expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});

test('returns an empty array if no even numbers', () => {
  expect(getEvenNumbers([1, 3, 5, 7])).toEqual([]);
});

test('returns the same array if all numbers are even', () => {
  expect(getEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
});

test('handles an empty array', () => {
  expect(getEvenNumbers([])).toEqual([]);
});