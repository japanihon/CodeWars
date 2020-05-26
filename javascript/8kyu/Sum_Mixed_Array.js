/*

INSTRUCTION

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.

*/

// SOLUTION

const sumMix = x => {
  const convertString = x.map(Number);
  const reduceToSum = convertString.reduce((a, b) => a + b, 0);
  return reduceToSum;
};
