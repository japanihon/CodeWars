/*

INSTRUCTION

Complete the solution so that it reverses the string value passed into it.
solution('world'); // returns 'dlrow'

*/

// SOLUTION

const solution = str => {
  return str
    .split("")
    .reverse()
    .join("");
};
