/*

INSTRUCTION

Complete the solution so that it reverses all of the words within the string passed in.

Example:
reverseWords("The greatest victory is that which requires no battle")
should return "battle no requires which that is victory greatest The"

*/

// SOLUTION

const reverseWords = str => {
  const split = str.split(" ");
  const reverse = split.reverse();
  const join = reverse.join(" ");
  return join;
};
