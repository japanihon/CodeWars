// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// SOLUTION

function grow(x) {
  let reduce = x.reduce((a, b) => a * b);
  return reduce;
}
