/*

INSTRUCTION

Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]

*/

// SOLUTION

const reverseSeq = n => {
  const range = [...Array( n + 1 ).keys()]
  const shift = range.shift()
  const reverse = range.reverse()
return reverse
}
