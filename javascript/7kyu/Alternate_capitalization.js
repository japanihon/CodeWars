/*

INSTRUCTION

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
See test cases for more examples.

The input will be a lowercase string with no spaces.
Good luck!

If you like this Kata, please try:
Indexed capitalization
Even-odd disparity

*/

// SOLUTION

const capitalize = s => {
  const split = s.split("");
  let lowerFirst = [];
  let capFirst = [];

  for (let index = 0; index < split.length; index++) {
    if (index % 2) {
      const cap = split[index].toUpperCase();
      const push = lowerFirst.push(cap);
    } else {
      const same = lowerFirst.push(split[index]);
    }
  }

  for (let index = 0; index < split.length; index++) {
    if (index % 2) {
      const same = capFirst.push(split[index]);
    } else {
      const cap = split[index].toUpperCase();
      const push = capFirst.push(cap);
    }
  }

  const joinCapFirst = capFirst.join("");
  const joinLowerFirst = lowerFirst.join("");

  return [joinCapFirst, joinLowerFirst];
};
