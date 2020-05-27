/*

INSTRUCTION

Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

// SOLUTION

const countOccurrences = array => {
  count = {};
  array.forEach(number => (count[number] = count[number] + 1 || 1));
  return count;
};

const returnOddNumber = obj => {
  const arr = Object.entries(obj);
  const result = arr.filter(miniArr => miniArr[1] % 2 != 0);
  const flatten = [].concat(...result);
  const final = flatten[0];
  return parseInt(final);
};

const findOdd = array => {
  const count = countOccurrences(array);
  return returnOddNumber(count);
};
