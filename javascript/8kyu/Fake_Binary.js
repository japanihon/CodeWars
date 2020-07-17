/*

INSTRUCTION

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

// SOLUTION

const fakeBin = x => {
  const split = x.split('')
  const map = split.map(num => num < 5? 0 : 1)
  const join = map.join('')
  return join
}
