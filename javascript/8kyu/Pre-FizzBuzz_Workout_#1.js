/*

INSTRUCTION

This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

*/

// SOLUTION

const preFizz = n => {
  let resultArr = []
  const range = [...Array(n).keys()]
  const shift = range.shift()
  const push = range.map(num => { resultArr.push(num) })
  const concat = resultArr.concat(n)
  return concat
}
