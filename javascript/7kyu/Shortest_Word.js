// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

// SOLUTION

function findShort(s) {
  const spl = s.split(" ");
  const shorter = (left, right) => (left.length <= right.length ? left : right);
  const num = spl.reduce(shorter);
  return num.length;
}
