/*

INSTRUCTION

Complete the square sum function so that it squares each number passed into it and then sums the results together.

Example:
[1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/
// SOLUTION

const squareSum = numbers => {
  const mapping = numbers.map(x => x * x);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const reduc = mapping.reduce(reducer, 0);
  return reduc;
};
