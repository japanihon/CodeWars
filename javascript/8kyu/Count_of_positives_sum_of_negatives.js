/*

INSTRUCTION

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
you should return [10, -65]

*/

// SOLUTION

const countPositivesSumNegatives = input => {
  if (!input || input.length === 0) return [];

  let negArr = [];
  let posArr = [];

  const maping = input.map(num =>
    num <= 0 ? negArr.push(num) : posArr.push(num)
  );
  const negSum = negArr.reduce((a, b) => a + b, 0);
  const posCount = posArr.length;

  const finalArr = [posCount, negSum];

  return finalArr;
};
