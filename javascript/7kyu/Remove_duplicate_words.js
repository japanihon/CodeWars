/*

INSTRUCTION

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'

*/

// SOLUTION

const removeDuplicateWords = s => {
  const split = s.split(" ");
  const removeSame = [...new Set(split)];
  const join = removeSame.join(" ");
  return join;
};
