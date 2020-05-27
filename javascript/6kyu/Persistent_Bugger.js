/*

INSTRUCTION

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 // and 4 has only one digit
persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126 // 1*2*6 = 12, and finally 1*2 = 2
persistence(4) === 0 // because 4 is already a one-digit number

*/

// SOLUTION

const persistence = numberToMultiply => {
  let numberOfDigits = 0;
  let numberOfOperations;

  for (
    numberOfOperations = 0;
    numberOfDigits === 0 || numberOfDigits > 1;
    numberOfOperations++
  ) {
    if (String(numberToMultiply).length === 1) {
      break;
    }
    const putInString = String(numberToMultiply);
    const spl = putInString.split("");
    const reducer = (accumulator, currentValue) => accumulator * currentValue;

    numberToMultiply = spl.reduce(reducer);
    numberOfDigits = String(numberToMultiply).length;
  }
  return numberOfOperations;
};
