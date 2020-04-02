// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// SOLUTION

function createPhoneNumber(numbers) {
  let join = numbers.join("");
  let first = join.substring(0, 3);
  let second = join.substring(3, 6);
  let third = join.substring(6, 10);
  console.log(first, second, third);
  let phone = `(${first})` + ` ${second}` + `-${third}`;
  return phone;
}
